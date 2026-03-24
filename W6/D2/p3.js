//Event loop with multiple asynchronous tasks
console.log("Main script started");
//Task1
setTimeout(()=>{
    console.log("Timer A finished after 500ms");
},500);

//Task2
setTimeout(()=>{
    console.log("Timer B finished after 100ms");
},1000);

//Task3
setTimeout(()=>{
    console.log("Timer c finished after 0ms");
},0);

console.log("Main script ended");