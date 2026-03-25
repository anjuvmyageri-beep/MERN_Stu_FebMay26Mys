//Reading & writing files asynchronously with fs/promises

const fs=require("fs/promises");
const path=require("path");

async function runPromiseBasedFileFlow(){
    const filepath=path.join(__dirname,"Promises-note.txt");

    try{
        await fs.writeFile(filepath,
            "Written using fs/Promises.This works with async/await",
        );
        console.log("File written using fs/Promises");

        const content=await fs.readFile(filepath,"utf-8");
        console.log(content);
    }
    catch(error){
        console.log("Promises-based fs error:",error.message);
    }
}
runPromiseBasedFileFlow();