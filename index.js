const http=require("http");
const fs=require('fs')
const myserver=http.createServer((req,res)=>{
    const log=`${Date.now()}:New Request Recieved \n`
   fs.appendFile('test1.txt',log+JSON.stringify(req.headers,null,2),(err)=>{if(err){console.log("error is",err)}})
    res.end("Hello from Server");
})

myserver.listen(8100,()=>{
  try{
      console.log("HELLO FROM SERVER AGAIN")
  }
  catch (err){
    console.log("SERVER NOT RUNNING BECAUSE",err)
  }
});