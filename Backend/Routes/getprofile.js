const express = require('express');
const router = express.Router();
const { Usermodle, Postsmodle } = require("../Mongodb.js");
router.post("/profile",async (req,res)=>{
    try{
      const check= await Usermodle.findOne({email:(req.body.email)});
      if(check){
        return res.json(check);
      }
      else {
        res.json("not added to cart");
      }
    }
    catch (e) {
      console.error(e);
      res.json("user not found");
    }
  });
  module.exports = router;