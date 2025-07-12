const express=require("express");
const router=express.Router();

const MenuItem =require("../models/menuItems");


router.post("/",async(req,res)=>{
    try{
     const data=req.body;
     const newdata = new MenuItem(data);
     const dataSaved=await newdata.save();
     res.status(200).json(dataSaved);
    
    }catch(err){
        console.log(err);
        res.status(500).json({msg:"inter server error"});
    }
});

router.get("/",async(req,res)=>{
    try{

        const alldata =  await MenuItem.find({});
        res.status(200).json(alldata);


    }catch(err){
        res.status(500).json({msg:"Internla serve error"});
    }
});

router.get("/:taste",async(req,res)=>{
    try{
     const taste=req.params.taste;
     if(taste==="sweet" || taste === "spicy" || taste==="sour"){
      
        const getData=await MenuItem.find({taste:taste});
        res.status(200).json(getData);
     }else{
        res.status(401).json({msg:"valid taste"})
     }

    }catch(err){
        res.status(500).json({msg:"Inter server error"});
    }
})

module.exports = router