//Reading & writing files synchronously

const fs=require("fs");
const path=require("path");

const filepath=path.join(__dirname,"sync-notEqual.txt");

//syntax for function usage in a module
//ModuleName.functionName()

fs.writeFileSync(filepath,"This file was written using  writeFile");

console.log("File written synchronously.");

const content=fs.readFileSync(filepath,"utf-8");

console.log("File read synchronous");
console.log(content);