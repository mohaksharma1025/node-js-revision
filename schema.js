const mongoose=require('mongoose');

const userSchema=mongoose.Schema(
    {
firstname:{
    type:String,
    required:true
},
lastname:{
    type:String,
    required:false
},
email:{
    type:String,
    required:true,
    unique:true
},
job_title:{
    type:String,
    required:true
},
gender:{
    type:String,
    required:true
}




    },{timestamps:true}
)

 const User=mongoose.model('PRACTICE',userSchema);
 module.exports=User;