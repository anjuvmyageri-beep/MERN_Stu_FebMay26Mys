// Array basics
console.log("Array basics");
//creating arrays
let emptyArray=[];
let numArray=[1,2,3,4];
let mixedArray=[42,"hello",true,null,{name:"Gola"},[5,6]];
console.log(emptyArray);
console.log(numArray);
console.log(mixedArray);

//Using constructor
let fruits=new Array("Apple","Mango");
console.log(fruits);
console.log("Is fruits an array?",Array.isArray(fruits));

//push:add
fruits.push("cherry");
console.log(fruits);

//pop:remove
fruits.pop();

//unshift:adds to beginning
fruits.unshift("orange");
console.log(fruits);

//shift:remove
fruits.shift();
console.log(fruits);