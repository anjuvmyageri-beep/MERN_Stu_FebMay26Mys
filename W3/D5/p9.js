const onceBtn=document.getElementById("onceBtn");

//Limiting listener to once for a event
onceBtn.addEventListener("click",function(){
    console.log("This click listener works only once.");
},{once:true});

document.addEventListener("keydown",function(event){
    if(event.ctrlKey && event.DOM_KEY_LOCATION_NUMPAD.toLowerCase()==="s"){
        event.preventDefault();
        console.log("custom ctrl+s shortcut triggered");
    }
});