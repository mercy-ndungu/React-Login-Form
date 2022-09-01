import React,{useEffect, useState}  from "react";
import "./Form.css";
import image from "./edishop.png";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";










const Form = () => {
  const [email, setEmail] = useState("");
  console.log(email);
    const [password, setPassword] = useState("");
const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    const handleSubmit = () => {
      const data = {
        email: email,
        password: password
      }
      alert(JSON.stringify(data));
    }
       return (

<div className="form">
<div className="main-holder">

  <nav>
    <div className="list-item">
     
 <p className="items"><h1 className="nav-header">Eddie Shop</h1></p>
 <p className="items"> <p className="account">Dont have an account? <span className="sign"> Sign up</span></p> </p>
    </div>
  </nav>

<h2 className="welcome-text">Welcome Back</h2>
   <form className="form" onSubmit={handleSubmit}>
   <p className="input-head"> Your Email</p>
   <input type="text" className="input" name="username" id="useremail" placeholder="name@domain.com" 
   onChange={(e) =>{setEmail(e.target.value)}} />
   <p className="input-head"> Password</p>
  <input type="password" name="username" className="input" id="userpassword" placeholder="at least 8 characters" 
  onChange={(e) =>{setPassword(e.target.value)}}/> <br/>
  <input type="checkbox" className="checkbox"/>
  <p className="login">Keep me logged in <span className="reset"> Forgot password?</span></p>
<button className="log-button" type="submit">Login</button>
</form>
<p>
</p>
<p className="or">____________________________<span>or</span>_________________________</p>
<div className="icon-group">
<div className="icon">
  <FaFacebook/>
</div>
<div className="icon">
  <FaGoogle/>
</div>
<div className="icon">
  <FaInstagram/>
</div>
</div>


<div className="container">
  <img src={image} alt="imgage"/>
</div>
</div>
  </div>
);
};


export default Form;

