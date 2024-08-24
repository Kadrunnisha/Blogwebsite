const express = require('express');
const router = express.Router();
const { Usermodle, Postsmodle } = require("../Mongodb.js");

// POST API to handle new blog submissions
router.post('/blogposts', async (req, res) => {
    const { category, name, email, image, heading, content, comments } = req.body;
      console.log(name + email);
    try {
        // Create a new blog post instance with the request data
        const newBlogPost = new Postsmodle({
            category,
            name,
            email,
            image,
            heading,
            content,
            comments,
        });

        // Save the blog post to the database
        const savedPost = await newBlogPost.save();

        // Respond with the saved post and a 201 status code
        res.status(201).json(savedPost);
    } catch (err) {
        // Log the error and respond with a 400 status code and error message
        console.error(err);
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
