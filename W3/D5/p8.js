const askList=document.getElementById("taskList");
const addTask=document.getElementById("addTask");
let taskcount=3;

taskList.addEventListener("click",function(event){
    if(event.target.classList.contains("deleteBtn")){
        console.log("Delete button clicked for:",event.target.parentElement.textContent.trim());
        event.target.parentElement.remove();
    }

});

addTask.addEventListener("click",function(){
   taskcount++
   const li=document.createElement("li");
   li.innerHTML = "Task " + taskcount + '<button class="deleteBtn">Delete</button>';
   taskList.appendChild(li);
   console.log("New task created");

});
