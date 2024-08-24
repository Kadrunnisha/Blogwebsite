const mongoose=require("mongoose");
const url='mongodb+srv://kadrunnisha2:nTgxCdip3Ec5rRSM@intenship.oqexe5i.mongodb.net/Bloging-website?retryWrites=true&w=majority&appName=intenship'
mongoose.connect(url)
.then(()=>{
    console.log("mongodb connected")
})
.catch((error)=>{
    console.log("faild connection"+error);
})
const newSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone_no:{
        type:Number,
        required:true,
        
    },
    email:{
        type:String,
        required:true

    },
    password:{
        type:String,
        required:true
    }

},{collection:'users-data'})
const blogs=new mongoose.Schema({
            category:{
                type:String,
                required:true 
            },
            name:{
                type:String,
                required:true 
            },
            email:{
                type:String,
                required:true
            },
            image:{
                type:String,
                
            },
            heading:{
                type:String,
                required:true 
            },
            content:{
                type:String,
                required:true 
            },
            comments:[
                {
                 a:{
                    type:String,
                    required:true 
                  }
                }
            ]
   
},{collection:'Posts'})
const Usermodle=mongoose.model("Usermodle",newSchema);
const Postsmodle=mongoose.model("Postsmodle",blogs);
 module.exports={Usermodle,Postsmodle};