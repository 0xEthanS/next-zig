import { 
    spawn,  
} from "node:child_process";
import path from "node:path";


// process.stdin
// process.stdout




export function NodeProcess() {


    const arch = process.arch;
    const platform = process.platform;
    const availableMemory = process.availableMemory();
    const memoryUsage = process.memoryUsage();
    const cwd = process.cwd();
    const pid = process.pid;
    const parentPid = process.ppid;
    

    const start = process.hrtime();
    const end = process.hrtime(start);
    



    const processID = process.getgid;
    const ipcChannel = process.channel;
    const configObject = process.config;
    const userEnvironment = process.env;
    const resourceUsage = process.resourceUsage();




    const valueArray = [
        `Arch Process: ${arch}`, 
        `Platform Process: ${platform}`, 
        `Process Available Memory: ${availableMemory} bytes`, 
        `Process Memory Usage: ${memoryUsage}`, 
        `Current Working Directory: ${cwd}`, 
        `Process PID: ${pid}`, 
        `Parent PID: ${parentPid}`, 

        `Operations took ${end[0]} seconds and ${end[1]} nanoseconds`, 
    ];




    return valueArray;

}



