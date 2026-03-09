// try catch basics
//const (err){
//try{
    //console.log("Trying to access undefined variable");
    //console.log(notDefined);
    
//}
//catch(err){
  //  console.log("Error caught",err.name,"-",err.message);
//}
//console.log("Program execution continues");
//}

//JSON parsing error
let jsonText="{json}";
try{
    let data=JSON.parse(jsonText);
    console.log(data);
}
catch(err){
    console.log("error",err.message);
}
try{
    let num=10;
    num();
}
catch(err){
    try{
    let data=JSON.parse(jsonText);
    console.log(data);
}
catch(err){
    console.log(" Caught error",err.name);
}
}