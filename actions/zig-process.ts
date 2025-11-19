"use server";

import { spawn } from "node:child_process";
import path from 'path';





export async function zigAdderFunction({ a, b }:{ a: number, b: number }) {

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


		const binaryPath = path.join(process.cwd(), 'zig', 'binaries', routeExtension, "adder");


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

		childProcess.stdout.on('data', (data) => {
			const string = data.toString();
			console.log("---------- Sum: ", string)
		});
	});
};



