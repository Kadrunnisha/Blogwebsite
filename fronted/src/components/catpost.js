import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./post.css";
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {useParams }  from "react-router-dom";
const Catpost = () => {
    const {id}=useParams();
    console.log(id);
  
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch blog posts from the API
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/blogposts");
        if (!response.ok) {
          throw new Error("Failed to fetch blog posts");
        }
        const data = await response.json();
        setPosts(data.filter(item => item.category ===`${id}`));
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
                   <p className="p">{post.content.substring(0,500)}....</p>
                   <div className="readmore"> <Link to={`/posts/${post._id}`}> <p>Read More</p><FontAwesomeIcon icon={faArrowRight} /></Link></div>
                   <div className="a"><p><strong>Category:</strong> {post.category}</p>
                     <p><strong>Author:</strong> {post.name}</p></div>
            </div>
            
            
            {/* <p><strong>Email:</strong> {post.Email}</p>
            <h3>Comments:</h3> */}
            {/* {post.Comments && post.Comments.length > 0 ? (
              <ul>
                {post.Comments.map((comment, index) => (
                  <li key={index}>{comment.a}</li>
                ))}
              </ul>
            ) : (
              <p>No comments yet.</p>
            )} */}
          </div>
        ))
      ) : (
        <p>No blog posts available.</p>
      )}
     </div>
    </div>
  );
};

export default Catpost;
