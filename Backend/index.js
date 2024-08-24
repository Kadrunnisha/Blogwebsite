const express = require("express");
const cors = require("cors");
const path = require("path");

const { Usermodle ,Postsmodle} = require("./Mongodb.js"); // Assuming this is your MongoDB model
const Login = require("./Routes/login.js");
const Signin = require("./Routes/signin.js");
const Getpost = require("./Routes/getpost.js");
const   BlogPostRoutes = require('./Routes/addpost.js');
const   getprofile = require('./Routes/getprofile.js');
const Updateemail=require('./Routes/updateprofile.js');
const Updatename=require('./Routes/update-name.js');
const Updatenumber=require('./Routes/update-number.js');
const Delete=require('./Routes/deleteaccount.js');
const app = express();
app.use("/image",express.static(path.join(__dirname,"/image")));
// Middleware to parse JSON bodies
app.use(express.json());

// CORS setup - allowing all origins (for development)
app.use(cors({ origin: '*' }));

// Route setup
app.use("/api", Login);
app.use("/api", Signin);
app.use("/api", Getpost);
app.use("/api",BlogPostRoutes);
app.use("/api",getprofile);
app.use("/api",Updateemail);
app.use("/api",Updatename);
app.use("/api",Updatenumber);
app.use("/api",Delete);
// Start the server

app.use(express.static(path.join(__dirname,"../fronted/build")));
app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"../fronted/build/index.html"));
})
const port=process.env.PORT || 8001
app.listen(port, () => {
  console.log("Server started on port 8001");
});
