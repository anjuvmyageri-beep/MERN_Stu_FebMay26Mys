//Introduction to the NodeJS File system(fs)built-in module

const fs=require("fs");
const fsPromises=require("fs/promise");

console.log("Type of fs.readfile:",typeof fs.readFile);
console.log("Type of fs.written:",typeof fs.writeFile);

console.log("Type of fspromises.readfile:",typeof fsPromises.readFile);
console.log("Type of fspromises.written:",typeof fsPromises.writtenFile);