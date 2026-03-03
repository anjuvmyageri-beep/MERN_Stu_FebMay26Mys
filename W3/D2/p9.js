//Immediately Invoked Function Expression(IIFE)

(function(){
    console.log("Basic IIFE executed Immediately");
})();

(function(appName,Version){
    console.log("App:",appName,"Version: ",Version);
})("NodeJS","V22.22.0");

//with retuen value
const result=(function(){
    const a=10,b=20;
    return a+b;
})();
console.log("Sum is: ",result);