const clickBtn=document.getElementById("ClickBtn");
const demoInput=document.getElementById("demoInput");
const runClick=document.getElementById("runClick");
const runMouseover=document.getElementById("runMouseover");
const runkeydowm=document.getElementById("runkeydown");
const runDuplicate=document.getElementById("runDuplicate");
const hoverBox = document.getElementById("hoverBox"); 
const textBtn = document.getElementById("text");

clickBtn.addEventListener("click",function(e){
    console.log("e type",e.type);
    console.log("instance mouse event",e instanceof MouseEvent);
});

demoInput.addEventListener("keydown",function(e){
    if(e.key=="Enter"){
        console.log("Enter keydown")
    }
});

runClick.addEventListener("click",function(){
    clickBtn.click();
});

runMouseover.addEventListener("click",function(){
    hoverBox.dispatchEvent(new MouseEvent("mouseover"));
});


hoverBox.addEventListener("mouseover",function(){
    console.log("programmatically triggered mouseover");
});

runkeydowm.addEventListener("click",function(){
    demoInput.dispatchEvent(new KeyboardEvent("keydown",{key:"Enter"}

    ));
});

runDuplicate.addEventListener("click",function(){
    const temp=document.createElement("button");
    document.body.appendChild(temp);
    
});