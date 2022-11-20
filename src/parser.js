import  ScriptTarget  from 'typescript';
import ts from 'typescript'
import fs from 'fs'

export function parseTsFile(sourceFile){
    let node = ts.createSourceFile(sourceFile,
        fs.readFileSync(sourceFile,"utf-8"),
        ScriptTarget.Latest
        )
    return node;
}



