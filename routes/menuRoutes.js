const express = require('express');
const router = express.Router();
const menuItem = require("../models/menu");

router.post("/", async (req, res) => {
    try {
      const data = req.body;
      const menu = new menuItem(data);
      const response = await menu.save();
      console.log("menu data Saved");
      res.status(200).json(response);
    } catch (err) {
      console.log("Menu Error: " + err);
      res.status(500).json({ error: "internal server error" });
    }
  });
  
  router.get("/", async (req, res) => {
    try {
      let data = await menuItem.find();
      console.log("Menu Data get");
      res.status(200).json(data);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  });


  router.get('/:tastetype'  ,async(req, res) => {
    try{
        let tasteType  = req.params.tastetype;
        if(tasteType == 'sweet' || tasteType == "spicy" || tasteType == "sour"){
let response = await menuItem.find({taste : tasteType})
console.log("called ")
res.status(200).json(response)

        }

    }catch (err) {
        console.error(err);
        res.status(404).json({ error: "InValid Menu fetching" });
    }
  })

  module.exports = router;