//callback handling with named functions
function loaduser(next){
    setTimeout(function(){
        console.log("Step1 :User loaded.");
        next();
    },400);

}

function loadedOrders(next){
    setTimeout(function(){
        console.log("Step 2:orders loaded");
        next();
    },400);
}

function loadPayment(next){
    setTimeout(function(){
        console.log("Step 3:payment loaded.");
        next();
    },400);
}

function loadShipment(){
    setTimeout(function(){
        console.log("Step 4:shipment loaded.");
        console.log("Same flow but easier to read");
    },400);
}
loaduser(function(){
    loadedOrders(function(){
        loadPayment(function(){
            loadShipment();
        });
    });
});