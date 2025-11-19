# next-zig
An OS app where zig code is embedded in a nextjs app, optimized for serverless




### Why Next and Zig?
NextJS is probably the most wide spread and most accessible way to setup a NodeJS project, it has largely been responsible for deprecating create-react-app. What we need access to is the Node runtime in this instance. Bun or Deno are obviously excellent choices too, but Node is widely distributed and comes included in the install.

Why Zig? Aside from it being an incredibly cool and new project that's attempting to take on systems programming without being based on the C stdlib, it has a similar batteries included approach when it comes to the compiler. Whereas with Rust, cross-compilation is easier than it would be with C, with Zig, cross-compilation is built in from the start. During compilation you simply instruct the compiler to compie to x64, ARM64, WebAssembly, etc. and you recieve your binaries

ex. "zig build -Dtarget=x86_64-windows"

What does Node have to do with this? As a brief overview, you can run your Zig binaries within Node's child_process and the time to spawn a child_process is approximately 1-5ms. Now that we have our code cross-compiled, you can use Node's arch_process to detect which compute arhitecture (ie. x64, ARM64) your Node environment is executing in, and run the correct set of binaries you have previously cros-compiled. 




### Why go through all the trouble?
There may be more reasons that I haven't considered, but my primary use cases are either reducing latency or reducing resource use for tasks that need to take place in a server environment, whether the client lacks the resources to complete the task, logic/variables shouldn't be exposed to the client, etc. As far as the latency case goes, Zig will obviously execute faster as a compiled language running on a more powerful server device in most cases and execute faster than Node, Bun or Deno, plus you aren't locking yourself into a runtime. 




### Looking Forward
I think serverless is one of those things that isn't getting a lot of the respect it deserves largely, because the ecosystem hasn't been built out around it the same with it has been for things like AWS or Digital Ocean, but being able to take a fine grained approach to using compute resources on Vercel's Edge Network or Cloudflare Workers opens up a new realm of low hanging fruit. You no longer have to accept the latency cost of diverting traffic back to US-East or US-West, but the actual server machine you hit is physically closer to the client machine and the endpoint you may be sending traffic to after, without the headache you can provide a low latency system of potentially <100ms client-execution -> edge -> api in a simple and reproducable way.




### Project Overview


#### Compute Arhitectures:
    - "x64" for x86 64-bit
    - "ia32" for x86 32-bit
    - "arm64" for ARM 64-bit
    - "arm" for ARM 32-bit




### Retaining executables in git:

chmod +x zig/binaries/*/adder    