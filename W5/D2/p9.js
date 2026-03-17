//promise states:pending,fulfilled,rejected
const fulfilledpromise=new Promise(function(resolve){
    console.log("fulfilledpromise is pending");

    setTimeout(function(){
        resolve

    },1000);
});

const rejectedpromise=new Promise(function(resolve,reject){
    console.log("rejectedpromise is pending.");
    setTimeout(function(){
        reject("rejectedpromise is rejected.");
    },15000);
});
fulfilledpromise.then(function(message){
    console.log("message");
});
rejectedpromise.catch(function(message){
    console.log(message);
});