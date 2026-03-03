//Higher order function
//1.A function which takes another function as parameter
//or
//2.A function returns another function

function createMultiplier(factor){
    return function(number){
        return number*factor;
    }
}
let double=createMultiplier(2);
console.log("double(10): ",double(10));
