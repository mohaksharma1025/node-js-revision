const http=require("http");
const fs=require('fs');
// const url=require('url');
const express= require('express');
// const myserver=http.createServer((req,res)=>{
//     const log=`${Date.now()}:New Request Recieved \n`
//    fs.appendFile('test1.txt',log+JSON.stringify(req.headers,null,2),(err)=>{if(err){console.log("error is",err)}})
//     res.end("Hello from Server");
// })

const app=express();

app.get('/',(req,res)=>{
    return res.send("Hello from home page")
})

app.get('/about',(req,res)=>{
    return res.send("This is the about page"+" "+req.query.name)
})



// const myserver=http.createServer((req,res)=>{
//     console.log("this is the url",req.url);
//     const log=`New Request Recieved \n ${req.url}`
//    fs.appendFile('test1.txt',log,(err,data)=>{
// const myUrl=url.parse(req.url,true); //Parsing the url using node url package
// console.log(myUrl);

//     switch(myUrl.pathname){
//         case "/":
//             res.end("THIS IS HOME PAGE")
//             break;
//             case "/about":
//                 const name=myUrl.query.myName;
//             res.end(`THIS IS ABOUT PAGE ${name}`)
//             break;
           
//     }


    
// })});

// const myserver=http.createServer(app);


// myserver.listen(8100,()=>{
//   try{
//       console.log("HELLO FROM SERVER AGAIN")
//   }
//   catch (err){
//     console.log("SERVER NOT RUNNING BECAUSE",err)
//   }
// });
app.listen(8000,()=>{
    console.log("SERVER STARTED ON PORT 8000")
})

// NOW WE DONT NEED URL PACKAGE SO WE CAN UNISTALL IT