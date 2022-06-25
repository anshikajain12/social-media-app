import React from "react";
import Topbar from "../../topbar/Topbar";
import Sidebar from "../../left/sidebar/Sidebar";
import Feed from "../../middle/feed/Feed";
import Rightbar from "../../rightbar/Rightbar";
import "./profile.css";

function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileright">
          <div className="profilerightop">
            <div className="profilecover">
              <img
                src="../Assests/post/3.jpg"
                alt=""
                className="profilecoverimg"
              />
              <img
                src="../Assests/person/1.jpg"
                alt=""
                className="profileuserimg"
              />
            </div>
            <div className="profileinfo">
              <h4 className="profileinfoname">Safak Kocaoglu</h4>
              <span className="profileinfodesc">Hello My Friends!</span>
            </div>
          </div>
          <div className="profilerightbottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
