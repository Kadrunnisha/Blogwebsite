import React, { useState } from "react";
import "./newblogform.css";
import { useNavigate } from "react-router-dom";
const BlogPostForm = () => {
    const navigate = useNavigate();
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [heading, setHeading] = useState("");
  const [content, setContent] = useState("");
  const [comments, setComments] = useState([{ a: "" }]);

  const handleCommentChange = (index, event) => {
    const newComments = [...comments];
    newComments[index].a = event.target.value;
    setComments(newComments);
  };

  const addCommentField = () => {
    setComments([...comments, { a: "" }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token=localStorage.getItem("tokken");
    if(token==null){
        alert("Do login first");
        navigate("/login");
    }else{
    const newPost = {
      category,
      name,
      email,
      image,
      heading,
      content,
      comments,
    };

    try {
      const response = await fetch("/api/blogposts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
      });

      const result = await response.json();
      console.log(result);

      // Handle success or error based on your application's logic
      if (response.ok) {
        navigate("/");
        alert("Blog post submitted successfully!");
        // Clear form fields
        setCategory("");
        setName("");
        setEmail("");
        setImage("");
        setHeading("");
        setContent("");
        setComments([{ a: "" }]);
      } else {
        alert("Failed to submit blog post.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting the blog post.");
    }
  }
  };

  return (
    <div className="post-container">
    <div className="post-inner-conatiner">
      <h2>Create a New Blog Post</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="d1" >
          <label>Category:</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Category"
            required
          />
        </div>
        <div className="d1">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            required
          />
        </div>
        <div className="d1">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            required
          />
        </div>
        <div className="d1">
          <label>Image URL:</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Image URL"
            required
          />
        </div>
        <div className="d1">
          <label>Heading:</label>
          <input
            type="text"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
            placeholder="Blog Heading"
            required
          />
        </div>
        <div className="d1">
          <label>Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Blog Content"
            required
          />
        </div>
        <div className="d1">
          <label>Comments:</label>
          <div className="in">
          {comments.map((comment, index) => (
            <div key={index} >
              <input
                type="text"
                value={comment.a}
                onChange={(e) => handleCommentChange(index, e)}
                placeholder={`Comment ${index + 1}`}
              />
            </div>
          ))} </div>
          <button type="button" onClick={addCommentField} className="butt">
            Add Comment
          </button>
        </div>
        <div className="d1">
          <button type="submit" className="butt">Submit Blog Post</button >
        </div>
      </form>
      </div>
    </div>
  );
};

export default BlogPostForm;
