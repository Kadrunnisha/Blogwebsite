import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./post.css";
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {useParams }  from "react-router-dom";
const Fullpost = () => {
    const {id}=useParams();
    console.log(id);
  const [comment,setComment]=useState("");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

//   const submit = async () => {
//     try {
//         const response = await fetch("http://localhost:8001/api/comment", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 id: id,
//                 comment: comment
//             }),
//         });

//         const result = await response.json();
//         console.log(result);
//     } catch (error) {
//         console.error("Error:", error);
//     }
// };

  useEffect(() => {
    // Fetch blog posts from the API
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/blogposts");
        if (!response.ok) {
          throw new Error("Failed to fetch blog posts");
        }
        const data = await response.json();
        setPosts(data.filter(item => item._id===`${id}`));
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchPosts();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container">
      <div className="innercontainer">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post._id} className="blog-post">
           
            <div className="im"><img src={`${post.image}`} alt={post.heading} /></div>
            <div className="contant">
                   <h2>{post.heading}</h2>
                   <p className="p">{post.content}</p>
                  
                   <div className="a"><p><strong>Category:</strong> {post.category}</p>
                     <p><strong>Author:</strong> {post.name}</p></div>
           
            
            
            <p className="k"><strong>Email:</strong> {post.email}</p>
            <h3  className="k">Comments:</h3>
           
            {post.comments && post.comments.length > 0 ? (
              <ul className="k">
                {post.comments.map((comment, index) => (
                  <li key={index}>{comment.a}</li>
                ))}
              </ul>
            ) : (
              <p>No comments yet.</p>
            )}
             </div>
          </div>
        ))
      ) : (
        <p>No blog posts available.</p>
      )}
     </div>
    </div>
  );
};

export default Fullpost;
