import { 
    spawn,  
} from "node:child_process";
import path from "node:path";


// process.stdin
// process.stdout




export function NodeProcessValues() {

    
    // Node Proces Variable
    const arch = process.arch;
    const platform = process.platform;
    const availableMemory = process.availableMemory();
    const memoryUsage = process.memoryUsage();
    const cwd = process.cwd();
    const pid = process.pid;
    const parentPid = process.ppid;
    

    // Node Process time
    const start = process.hrtime();
    const end = process.hrtime(start);


    // Vercel Variables
    const region = process.env.VERCEL_REGION
    

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

        `Vercel Edge Region: ${region}`, 

        `Operations took ${end[0]} seconds and ${end[1]} nanoseconds`, 
    ];


    return valueArray;

};





