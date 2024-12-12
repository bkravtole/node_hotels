const express = require('express');
const router = express.Router();
const persondata = require("../models/person");

router.post("/", async (req, res) => {
    try {
      const data = req.body;
      const newPersonData = new persondata(data);
      const response = await newPersonData.save();
      console.log("Data saved");
      res.status(200).json(response);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  
  router.get("/", async (req, res) => {
    try {
      let data = await persondata.find();
      console.log("Data get");
      res.status(200).json(data);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  
  
  router.get("/:worktype" , async(req , res) => {
  try  {
    let worktype = req.params.worktype
    if(worktype == "chef"  || worktype == "manager" || worktype == "waiter"){
      let response = await persondata.find({work : worktype})
      console.log("response fetched");
      res.status(200).json(response)
      
    }
  
    }catch(err){
      console.error(err);
      res.status(404).json({ error: "invalid work type" });
    }
  })


  router.put('/:id' , async(req , res) => {
    try{
let paramdId = req.params.id
let updateBody = req.body
 
let response = await persondata.findByIdAndUpdate(paramdId, updateBody , {
  new : true,
  runValidators : true ,
})
 
if(!response){
  return res.status(404).json({ error: "Person not Found" });
}
console.log("response fetched");
      res.status(200).json(response)
    }catch(err){
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  })


  router.delete("/:id" , async(req , res) => {
    try{
      let idvalue = req.params.id;
let response = await persondata.findByIdAndDelete(idvalue)

if(!response){
  return res.status(404).json({ error: "person not found" });
}
console.log("data deleted")
res.status(200).json(response)
    }catch(err){
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  })

  module.exports = router;