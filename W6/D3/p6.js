//Directory(folder)operations:mkdir,readdir and rmdir/r

const fs=require("fs");
const path=require("path");

const demoDir=path.join(__dirname,"demo-folder");

fs.mkdirSync(demoDir,{recursive:true});

fs.writeFileSync(path.join(demoDir,"File1.txt"),"File1 content");
fs.writeFileSync(path.join(demoDir,"File1.txt"),"File2 content");

//To check folder contents
const entries=fs.readdirSync(demoDir);
console.log("Directory contents:entries");

fs.rmSync(demoDir,{recursive:true,force:true});
console.log("Directory exists?",fs.existsSync(demoDir));