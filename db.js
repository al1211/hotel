const mongoose=require("mongoose");


// define mongodb uri 
const mongoUrl="mongodb://localhost:27017/hotel";

const ConnectDb=async()=>{
    try{
        await mongoose.connect(mongoUrl);
        console.log("mongodb connect");
    }catch(err){
        console.error("mongoose not connect");
        process.exit(1);
    }
};

module.exports=ConnectDb;