import React from "react";
import "./Form.css";
import image from "./edishop.png";
// import { FaFacebook } from "react-icons/fa";
// import { FaGoogle } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";










const Form = () => {
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
   <form className="form">
   <p className="input-head"> Your Email</p>
   <input type="text" className="input" name="username" id="useremail" placeholder="name@domain.com" />
   <p className="input-head"> Password</p>
  <input type="password" name="username" className="input" id="userpassword" placeholder="at least 8 characters"/> <br/>
  <input type="checkbox" className="checkbox"/>
  <p className="login">Keep me logged in <span className="reset"> Forgot password?</span></p>
<button className="log-button">Login</button>
</form>
<p>
</p>
<p className="or">____________________________<span>or</span>_________________________</p>

{/* <div>
  <FaFacebook/>
</div>
<div>
  <FaGoogle/>
</div>
<div>
  <FaInstagram/>
</div> */}

<div className="container">
  <img src={image} alt="imgage"/>
</div>
</div>
  </div>
);
};


export default Form;

