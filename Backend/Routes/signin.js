const express = require("express");
const router = express.Router();
const { Usermodle } = require("../Mongodb.js");

router.post("/signin", async (req, res) => {
    const { name, phone_no, email, password } = req.body;
    const data = {
      name: name,
      phone_no: phone_no,
      email: email,
      password: password
     
    };
  
    console.log(data);
  
    try {
      const check = await Usermodle.findOne({ email: email });
   
      if (check) {
        console.log(email);
        res.json("exists");
      } else {
          await Usermodle.insertMany(data);
        res.json("notexists");
      }
    } catch (e) {
      console.error(e);
      res.json("not exit");
    }
  });
  module.exports = router;