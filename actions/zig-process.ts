"use server";

import { spawn } from "node:child_process";
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory of the current file
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

        // Relative path from actions/ to zig/binaries/
        const binaryPath = path.join(__dirname, '..', 'zig', 'binaries', routeExtension, 'adder');
        
        console.log('Resolved binary path:', binaryPath);

        const childProcess = spawn(binaryPath);

        let output = "";

        childProcess.stdout.on("data", (i) => {
            output += i.toString();
        })

        childProcess.on('close', (i) => {
            console.log('Process closed with code:', i);
            if (i === 0) {
                const result = parseInt(output.trim(), 10)
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