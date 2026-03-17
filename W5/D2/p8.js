//Introduction to promises

console.log("program started.");
function getwelcomeMessage(){
    return new Promise(function(resolve){
        setTimeout(()=>{
            resolve("Welcome to promises.");
        },1000);
    });
}
const messagepromise=getwelcomeMessage();

console.log("Promise created.Reslt not ready yet.");

messagepromise.then(function(message){
    console.log(message);
});
