'use client'

import { zigAdderFunction } from '@/actions/zig-process';
import { useState } from 'react';




export function Button() {
	const [a, setA] = useState(0);
	const [b, setB] = useState(0);
	const [result, setResult] = useState<number | null>(null);
	async function handleSubmit() {
		const output = await zigAdderFunction({ a, b });
		setResult(output as number);
	}




	return (
		<div className="mx-auto max-w-xl">
			<h2 className="font-mono list-inside list-decimal text-md/6 text-center sm:text-left mb-2 tracking-[-.01em]">
				Add Numbers in Zig:
			</h2>

			<div>
				Sum: {result}
			</div>




			<div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
				<div className="sm:col-span-2">
					<label htmlFor="company" className="block text-sm/6 font-semibold text-gray-900">
						Number 1
					</label>
					<div className="mt-2.5">
						<input
							name="number1" 
							type="text" 
							value={a} 
							onChange={(e) => setA(Number(e.target.value))}
							className="block w-full rounded-md px-3.5 py-2 text-base outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 bg-white text-gray-900 outline-gray-300 placeholder:text-gray-400 focus:outline-zinc-600"
						/>
					</div>
				</div>
				<div className="sm:col-span-2">
					<label htmlFor="company" className="block text-sm/6 font-semibold text-gray-900">
						Number 2
					</label>
					<div className="mt-2.5">
						<input
							name="number2" 
							type="text" 
							value={b} 
							onChange={(e) => setB(Number(e.target.value))}
							className="block w-full rounded-md px-3.5 py-2 text-base outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 bg-white text-gray-900 outline-gray-300 placeholder:text-gray-400 focus:outline-zinc-600"
						/>
					</div>
				</div>
			</div>




			<div className="mt-10">
				<button
					onClick={handleSubmit}
					className="block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 bg-zinc-600 hover:bg-zinc-500 focus-visible:outline-zinc-600 text-white"
				>
					Number 1 + Number 2
				</button>
			</div>




		</div>
	);
}







