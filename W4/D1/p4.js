//Logging

console.log("console logging");

console.warn("Warning message");

console.error("error message");

let users=[
    {id:1,name:"Anjali"},
    {id:2,name:"Naveen"},
];

console.log(users);
console.table(users);

//Group related logs
console.group("Grouped log");
console.log("Log 1");
console.log("Log 2");
console.log("Log 3");
console.groupEnd();

//message execution time
console.time("LoopTimer");
for(let i=0;i<1000;i++);
console.timeEnd("LoopTimer");
