import React from "react";
import "./login.css";

function Login() {
  return (
    <div className="login">
      <div className="loginwrapper">
        <div className="loginleft">
          <h3 className="loginlogo">Social Media</h3>
          <span className="logindesc">
            Connect with friends and the world around you on Social Media
          </span>
        </div>
        <div className="loginright">
            <div className="loginbox">
                <input placeholder="Email" className="loginInput" />
                <input placeholder="Password" className="loginInput" />
                <button className="loginbutton">Log In</button>
                <span className="loginforgot">Forgot Password?</span>
                <button className="loginregisterbutton">Create a New Account</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
