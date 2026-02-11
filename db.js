const mongoose=require('mongoose');

const connectDB=()=>mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MONGO CONNECTED"))
.catch((e)=>console.log("MongoError",e))

module.exports= connectDB;