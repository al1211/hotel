
require("dotenv").config();
const mongoose=require("mongoose");


// define mongodb uri 
const mongoUrl=process.env.MONGO_URI;

const ConnectDb=async()=>{
    try{
        await mongoose.connect(mongoUrl);
        console.log(mongoUrl);
        console.log("mongodb connect");
    }catch(err){
        console.error("mongoose not connect",err.messaage);
        process.exit(1);
    }
};

module.exports=ConnectDb;