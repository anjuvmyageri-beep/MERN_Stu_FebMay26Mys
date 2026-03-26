//Sending response in JSON format

const http=require("http");

const server=http.createServer(function(req,res){
    if(req.url==="/api/status" && req.method==="GET"){
        const responseData={
            success:true,
            message:"API is working",
            server:"NodeJS HTTP Module"
        };
     //JSON response using application-JSON
        res.writeHead(200,{"Content-Type":"application/json"});
        //JSON.stringfiy()converts JS object to a JSON string
        res.end(JSON.stringify(responseData));
    return;
    }
     res.writeHead(404, { "content-Type": "text/plain" });
    res.end(JSON.stringify({success:false,message:"Route not found."}));
});
server.listen(3001, () => {
    console.log("Server running at http://localhost:3001/");
});