const express = require("express");
const router = express.Router();
const { Usermodle } = require("../Mongodb.js");

router.post("/login",  async (req, res) => {
    const { email, password } = req.body;
  
    console.log(req.body);
  
    try {
      const check = await Usermodle.findOne({ email: email });
  
      if (check) {
        console.log(email);
        res.json("exists");
      } else {
        res.json("notexists");
      }
    } catch (e) {
      console.error(e);
      res.json("not exit");
    }
  });
  module.exports = router;
  
