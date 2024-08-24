import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import "./nav.css";
import {useContext} from "react";
import {createContexts} from  "../context/context.js";
 const Nav=()=>{
  const email=useContext(createContexts);
  const token = localStorage.getItem("tokken");
    // const [email,setemail]=useState("");
    // useEffect(() => {
    //     const token = localStorage.getItem("tokken");
    //     if (token) {
    //       setemail(token);
    //     }
    //   },[]);
    return(
        <>
         <div className="replace_navbar"></div>
        <div className="header">
            <div className="logo"><Link to="/"   className="l"> Blog WebSite</Link></div>
            <div className="cat">
            <div><Link to="/Closet" className="c" >Closet</Link></div>
            <div><Link to="/Bags" className="c" >Bags</Link></div>
            <div><Link to="/Jewelry"  className="c" >Jewelry</Link></div>
            <div><Link to="/Beauty"  className="c">Beauty</Link></div>
            </div>
            <div className="search"><input type="text" placeholder="Search Blogs"></input><FontAwesomeIcon icon={faMagnifyingGlass} className="i" /></div>
            <div><Link to="/postBlog" className="c" > Post-Blog</Link></div>
            {(token!=null)
          ? <div><Link to="/profile"  className="c">Profile</Link></div>
          : <div><Link to="/Login" className="c">Login</Link></div>
        }
        </div>
        </>
    )
 }
 export default Nav;