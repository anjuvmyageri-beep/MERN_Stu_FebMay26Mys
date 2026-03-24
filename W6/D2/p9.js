//Removing EventEmitter listeners

const EventEmitter=require("events");

const jobEmitter=new EventEmitter();

function showJobProgress(status){
    console.log("Job Status:",status);

}

//Add listener
jobEmitter.on("Progress",showJobProgress);

//Emit the event
jobEmitter.emit("Progress","50% completed");


//Remove listener
jobEmitter.off("Progress",showJobProgress);

jobEmitter.emit("Progress","100% showJobProgress");