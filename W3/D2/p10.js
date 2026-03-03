//Callback function
//Is a function which is passed an argument
// to another function

function greetUser(name,callback){
    console.log("Hello,",name);
    callback();
}
greetUser("Anju",function(){
    console.log("callback function executed");
});