//innerText & textContent
//innerText:visible rendered text only
//textContent:all text nodes regardless of CSS
//innerHTML:allows reading or writing

const message=document.getElementById("message");
const textContent=document.getElementById("textContentBtn");
// innerTextBtn
document.getElementById("innerTxtBtn").addEventListener("click",function(){
    message.innerText="Updated using innerText";

});
// for textcontentbtn
document.getElementById("TxtContentBtn").addEventListener("click",function(){
    message.innerText="Updated using TextContentBtn";

});
// resetbtn
document.getElementById("resetBtn").addEventListener("click",function(){
    message.innerText = "originalText";
});
const box=document.getElementById("box");
document.getElementById("innerHTMLBtn").addEventListener("click",function(){
    box.innerHTML="<strong>Original</strong>content";
});


