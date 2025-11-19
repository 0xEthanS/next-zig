"use server";

import { spawn } from "node:child_process";
import path from 'path';
import { fileURLToPath } from 'url';
import { copyFileSync, existsSync, chmodSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function zigAdderFunction({ a, b }: { a: number, b: number }) {
    const inputString = `${a} ${b}`;

    return new Promise((resolve, reject) => {
        let routeExtension = "";
        const arch = process.arch;
        const platform = process.platform;

        if (arch === "x64" && platform === "linux") {
            routeExtension = "x64-linux"
        } else if (arch === "arm64" && platform === "linux") {
            routeExtension = "arm64-linux"
        } else if (arch === "x64" && platform === "darwin") {
            routeExtension = "x64-darwin"
        }

        const sourcePath = path.join(__dirname, '..', 'zig', 'binaries', routeExtension, 'adder');
        

        const tmpBinaryPath = `/tmp/adder-${routeExtension}`;
        

        if (!existsSync(tmpBinaryPath)) {
            try {
                copyFileSync(sourcePath, tmpBinaryPath);
                chmodSync(tmpBinaryPath, 0o755);
            } catch (err) {
                reject(new Error(`Failed to setup binary: ${err}`));
                return;
            }
        }

        const childProcess = spawn(tmpBinaryPath);

        let output = "";

        childProcess.stdout.on("data", (i) => {
            output += i.toString();
        });

        childProcess.on('close', (i) => {
            if (i === 0) {
                const result = parseInt(output.trim(), 10);
                resolve(result);
            } else {
                reject(new Error(`Process exited with code ${i}`));
            }
        });

        childProcess.on("error", (err) => {
            reject(err);
        });

        childProcess.stdin.write(inputString + "\n");
        childProcess.stdin.end();
    });
}