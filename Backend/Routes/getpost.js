const express = require("express");
const router = express.Router();
const { Usermodle,Postsmodle } = require("../Mongodb.js");
router.get('/blogposts', async (req, res) => {
    try {
        const blogPosts = await Postsmodle.find();
        res.json(blogPosts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
module.exports = router;