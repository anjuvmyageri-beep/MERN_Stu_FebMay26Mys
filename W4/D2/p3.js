const container=document.getElementById("container");
//Position:
//beforebegin
//afterbegin
//beforeend
//afterend

document.getElementById("btn").addEventListener("click",function(){
    container.insertAdjacentElement("beforebegin","<p>Dynamically inserted</p>");
}
);