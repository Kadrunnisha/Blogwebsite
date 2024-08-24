import "./login.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import {createContexts} from  "../context/context.js";
const Signin = () => {
  const cart=useContext(createContexts);
  const navigate = useNavigate();
  const [pas, setPas] = useState("password");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  async function submit(e) {
    e.preventDefault();
    try {
      const response = await fetch("/api/signin", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          phone_no: phone,
          email,
          password
        }),
      });

      const result = await response.json();
      console.log(result);

      if (result === "exists") {
        console.log("User exists");
      } else if (result === "notexists") {
        localStorage.setItem("tokken", email);
        cart.setmail(email);
        navigate("/");
      } else {
        console.log("Unexpected result");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <>
      <div className="login_body">
        <div className="login_page">
          <div className="label">
            <p>Blogging Website</p>
          </div>
          <div className="para">
            <p>India's blogging website</p>
          </div>
          <div className="form">
            <form onSubmit={submit}>
              <div className="email">
                <label>Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="name" required />
              </div>
              <div className="email">
                <label>Phone No:</label>
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="number" required />
              </div>
              <div className="email">
                <label>Login:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" required />
              </div>
              <div className="email">
                <label>Password:</label>
                <input
                  type={pas}
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <FontAwesomeIcon
                  className="eye"
                  icon={pas === "password" ? faEye : faEyeSlash}
                  onClick={() => setPas(pas === "password" ? "text" : "password")}
                />
              </div>
              <div className="check_box">
                <input type="checkbox" className="check" />
                <div className="r">Remember Me</div>
              </div>
              <div className="but_login">
                <input type="submit" value="Sign In" />
              </div>
            </form>
          </div>
          <div className="newuser">
            <p> Have an Account? <Link to="/login">Log in</Link> </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;
