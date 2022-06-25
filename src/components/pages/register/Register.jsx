import React from "react";
import "./register.css";

function Register() {
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
                <input placeholder="Username" className="loginInput" />
                <input placeholder="Email" className="loginInput" />
                <input placeholder="Password" className="loginInput" />
                <input placeholder="Password Again" className="loginInput" />
                <button className="loginbutton">Sign Up</button>
                <button className="loginregisterbutton">Login into Account</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
