require('dotenv').config();
const express=require('express');
let users =require('./MOCK_DATA.json')
const app=express();
const fs=require('fs');
const connectDB=require('./db.js');
const User=require('./schema.js');
connectDB();

app.use(express.json())
app.use(express.urlencoded({extented:true}));
const PORT=8000


//POST ROUTE FOR MONGODB
app.post('/db/users',async(req,res)=>{
    const {firstname,lastname,email,job_title,gender}=req.body;
   try{ const pushData=await
        User.create({firstname,lastname,email,job_title,gender})
        
    
    res.json({message:"DATA PUSHED",
        data:pushData
    })
    
}
    
    catch(err){
        console.log("YOU HAVE AN ERROR",err)
        res.json({message:"TASK FAILED"})
    }
})

//GET USER FROM DATABASES

app.get('/db/users',async(req,res)=>{
    const data=await User.find();
    const html=`
    <ul>
    ${data.map(user=>`
        <li>${user.firstname}</li>`
    ).join("")}
    </ul>


    `
    res.send(html)
    console.log(data)
})

//ROUTES
app.get('/users',(req,res)=>{
    
    res.send(html);
})


app.get('/api/users',(req,res)=>{
    res.json(users);
} )
app.get('/api/users/:id',(req,res)=>{

    const id= Number(req.params.id);
    const user=users.find(user=>user.id===id);
   return  res.json(user)

})

app.post('/api/users',(req,res)=>{
    const data=req.body;
    users.push({...data,id:users.length+1})
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(users,null,2),(err)=>{
       console.log(err);
        
    })

    res.json({
        status:true,
        data:data,
        userid:users.length
    })
})

app.delete('/api/users/:id',(req,res)=>{
    const id = Number(req.params.id);
    const ilength = users.length;
    const deleteduser=users.find(user=>user.id===id);

    users = users.filter(user => user.id != id);

    if (ilength === users.length) {
        return res.json({
            message: "User does not exist"
        })
    }

    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users, null, 2), (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({
          message: "Failed to update file"
        });
      }

      res.status(200).json({
        message: "USER DELETED SUCCESSFULLY",
        deleteduser:deleteduser
      })
    });
});

// ADDED LIKE JSON
// app.post('/api/users',(req,res)=>{
//     const dataa=req.body;
//    try{ users.unshift(dataa);

//     fs.writeFile('./MOCK_DATA.json',JSON.stringify(users,null,2),(err)=>console.log(err))
//       res.status(201).json({
//         success:true,
//         message:"data added successfully",
//         data:dataa
//     })
//    }
//    catch(err){
//   console.log("you have an error ",err)
//    }
   
// })
app.patch('/api/users/:id',(req,res)=>{
    //to update  new user
    return res.json ({status:"pending"})
})



app.listen(PORT,()=>{
    console.log("Server Started at",PORT)
})




// const http=require("http");
// const fs=require('fs');
// // const url=require('url');
// const express= require('express');
// // const myserver=http.createServer((req,res)=>{
// //     const log=`${Date.now()}:New Request Recieved \n`
// //    fs.appendFile('test1.txt',log+JSON.stringify(req.headers,null,2),(err)=>{if(err){console.log("error is",err)}})
// //     res.end("Hello from Server");
// // })

// const app=express();

// app.get('/',(req,res)=>{
//     return res.send("Hello from home page")
// })

// app.get('/about',(req,res)=>{
//     return res.send("This is the about page"+" "+req.query.name)
// })



// // const myserver=http.createServer((req,res)=>{
// //     console.log("this is the url",req.url);
// //     const log=`New Request Recieved \n ${req.url}`
// //    fs.appendFile('test1.txt',log,(err,data)=>{
// // const myUrl=url.parse(req.url,true); //Parsing the url using node url package
// // console.log(myUrl);

// //     switch(myUrl.pathname){
// //         case "/":
// //             res.end("THIS IS HOME PAGE")
// //             break;
// //             case "/about":
// //                 const name=myUrl.query.myName;
// //             res.end(`THIS IS ABOUT PAGE ${name}`)
// //             break;
           
// //     }


    
// // })});

// // const myserver=http.createServer(app);


// // myserver.listen(8100,()=>{
// //   try{
// //       console.log("HELLO FROM SERVER AGAIN")
// //   }
// //   catch (err){
// //     console.log("SERVER NOT RUNNING BECAUSE",err)
// //   }
// // });
// app.listen(8000,()=>{
//     console.log("SERVER STARTED ON PORT 8000")
// })

// // NOW WE DONT NEED URL PACKAGE SO WE CAN UNISTALL IT