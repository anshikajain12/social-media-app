import React from "react";
import Topbar from "../../topbar/Topbar";
import Sidebar from "../../left/sidebar/Sidebar";
import Feed from "../../middle/feed/Feed";
import Rightbar from "../../rightbar/Rightbar";
import './home.css'
function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
}

export default Home;
