const mongoose=require("mongoose");


const personSchema=new mongoose.Schema({
    name:{
    type:String,
    required:true
    },
    age:{
        type:String,
    },
    work:{
        type:String,
        enum:["chef","waiter","manager"],
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    address:{
        type:String,
        required:true,
    },
    salary:{
        type:Number,
        required:true
    }

});

const Person=mongoose.model("Person",personSchema);
module.exports=Person;