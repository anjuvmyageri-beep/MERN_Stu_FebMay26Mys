function getuser(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve({id:101,name:"Anjali"});
        },1000);
    });
}
function getOrder(userId){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(["order-A","order-B"]);
        },1200);
    });
}

async function showUserAndOrder(){
    const user=await getuser();
    //console.log("User loaded:",user.name);

    const orders=await getOrder(user.id);
    console.log("Orders loaded",orders);

}

showUserAndOrder();