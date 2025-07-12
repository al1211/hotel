const  mongoose = require("mongoose");

const MenuSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    taste:{
        type:String,
        enum:["sweet","spicy","sour"],
        required:true,
    },
    is_drink:{
        type:Boolean,
        default:false,
    },
    ingredients:{
        type:[String],
        default:[],
        required:true,
    },
    num_sales:{
        type:Number,
        required:true,
        default:0
    }
});


const MenuItem=mongoose.model("MenuItem",MenuSchema);

module.exports=MenuItem;