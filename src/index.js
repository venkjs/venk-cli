import Listr from "listr"
import {execa} from 'execa'
import  glob  from "glob";
import { parseTsFile } from "./parser.js";
export function argsToOptions(rawArgs){

}



export async function test(x){
    
}


export async function scanFiles(options){
    glob( './**/*.ts',{"ignore":['./node_modules/**']}, function( err, files ) {
        files?.forEach((file)=>{
            let parsedNode = parseTsFile(file)
            console.log(parsedNode)
        })
      });
}



export async function runTasks(options){
    let tasks = new Listr([
        {
            title:"Files are scanning",
            task:   ()=>test(1)
        },
        {
            title:"Files are scanning",
            task:   ()=>test(2),
            skip:()=>true
        },
        {
            title:"Files are scanning",
            task:   ()=>test(3)
        }
    ])

    await tasks.run()
}


export function cli(args){
    console.log(args)
    scanFiles(args)
}
