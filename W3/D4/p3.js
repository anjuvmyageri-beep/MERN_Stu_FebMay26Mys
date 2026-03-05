//Array map
let numArray=[1,2,3,4];
const square = numArray.map(num => num ** 2);
console.log(square);

let prices=[100,200,300,400];

let priceWithGST=prices.map(price=>price+price*0.18);
console.log("price w/0 tax",prices);
console.log("price w/0 tax",priceWithGST);

//using map to extract files
let users=[
    {name:"Arjun",age:24},
    {name:"krishna",age:28}
];

let names=users.map(user=>user.name);
console.log("",names);