const express = require("express");
const Person = require("../models/person");
const { findByIdAndDelete } = require("../models/menuItems");
const router=express.Router();




router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new Person(data);
    const savedPerson = await newPerson.save();
    console.log(savedPerson);
    res.status(200).json({ savedPerson });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: "Internal server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const person = await Person.find();
    console.log("data fecthed");
    res.status(200).json(person);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: "Internal server error" });
  }
});

router.get("/:worktype",async(req,res)=>{
  try{
const workType=req.params.worktype;

  if(workType =="chef" || workType =="waiter" || workType=="manager"){
  const response=await Person.find({work:workType});
   console.log(response);
   res.status(200).json(response);
  }else{
    res.status(401).json({msg:"Please valid type"});
  }
  }catch(err){

  }
});

router.put("/:id",async(req,res)=>{
    try{
     const id = req.params.id;
     const updatedPersondata=req.body;

     const response= await Person.findByIdAndUpdate(id,updatedPersondata, { new: true, runValidators: true });
     res.status(200).json(response);

    if(!response){
        res.status(404).json({msg:"Person not found"});
    }

    }catch(err){
        console.log(err);
        res.status(500).json({msg:"Internal Server error"});
    }
});

router.delete("/:id",async(req,res)=>{
    try{
        const personId=req.params.id;
        const deletePerson=await Person.findByIdAndDelete(personId);
        res.status(200).json(deletePerson);

    }catch(err){
        console.log(err);
        res.status(500).json({msg:"Internal server error"});
    }
})


module.exports = router