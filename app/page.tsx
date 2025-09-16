import { NodeProcess } from "@/actions/node-processes";


const valueArray = NodeProcess()






export default function Home() {
	return (
		<div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
			<main className="flex flex-col gap-[64px] row-start-2 items-center sm:items-start">




				<div className="flex flex-col gap-[24px] row-start-2 items-center sm:items-start">
					<h2 className="font-mono list-inside list-decimal text-md/6 text-center sm:text-left mb-2 tracking-[-.01em]">
						Node Process Values:
					</h2>
					<div className="flex flex-col gap-[16px] row-start-2 items-center sm:items-start">
						<p className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left ml-2 tracking-[-.01em]">
							Sum: {}
						</p>
						<p className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left ml-2 tracking-[-.01em]">
							Execution Time: {} nano-seconds
						</p>
					</div>

				</div>




				<div className="flex flex-col gap-[24px] row-start-2 items-center sm:items-start">
					<h2 className="font-mono list-inside list-decimal text-md/6 text-center sm:text-left mb-2 tracking-[-.01em]">
						Node Process Values:
					</h2>
					<div className="flex flex-col gap-[16px] row-start-2 items-center sm:items-start">
						{valueArray.map((i:string) => (
							<p 
								key={i} 
								className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left ml-2 tracking-[-.01em]"
							>
								{i}
							</p>
						))}
					</div>
				</div>




			</main>
		</div>
	);
}



