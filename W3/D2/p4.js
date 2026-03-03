//Conditional Statements
let age=20;
if(age< 13){
console.log("Child");
}
else if(age<18){
console.log("Teenage");
}
else{
console.log("Adults");
}

//Switch statements
console.log("Switch statements");
let day="Tuesday";
switch(day){
    case "Monday":
        console.log("Start of the week");
        break;
    case "Wednesday":
        console.log("Mid of the week");
        break;
    case "Friday":
        console.log("End of the week");
        break;
    default:
        console.log("Some day in week");
        break;
}

//Type Conversion
let n= Number("ABC");
console.log("Type of n:",typeof n);