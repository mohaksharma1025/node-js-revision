const mongoose=require('mongoose');

const connectDB=()=>mongoose.connect('mongodb://localhost:27017/nodejspractice')
.then(()=>console.log("MONGO CONNECTED"))
.catch((e)=>console.log("MongoError",e))

module.exports= connectDB;