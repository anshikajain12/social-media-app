import React from "react";
import "./Rightbar.css";
import { Users } from "../../dummyData";
import Online from "./Online/Online";
function RightBar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdaycontainer">
          <img src="../Assests/gift.png" alt="" className="birthdayimg" />
          <span className="birthdaytext">
            <b>Pola Foaster</b> and <b>3 other friends </b>have a birthday
            ltoday
          </span>
        </div>
        <img src="../Assests/ad.png" alt="" className="rightbarad" />
        <h4 className="rightbartitle">Online Friends</h4>
        <ul className="rightbarfriendlist">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbartitle">User information</h4>
        <div className="rightbarinfo">
          <div className="rightbarinforitem">
            <span className="rightbarinfokey">City:</span>
            <span className="rightbarinfovalue">New York</span>
          </div>
          <div className="rightbarinforitem">
            <span className="rightbarinfokey">From:</span>
            <span className="rightbarinfovalue">Madrid</span>
          </div>
          <div className="rightbarinforitem">
            <span className="rightbarinfokey">Relationship:</span>
            <span className="rightbarinfovalue">Single</span>
          </div>
        </div>
        <h4 className="rightbartitle">User Friends</h4>
        <div className="rightbarfollowings">
          <div className="rightbarfollowing">
            <img
              src="../Assests/person/1.jpg"
              alt=""
              className="rightbarfollowingimg"
            />
            <span className="rightbarfollowingname">John Carter</span>
          </div>
          <div className="rightbarfollowing">
            <img
              src="../Assests/person/2.jpg"
              alt=""
              className="rightbarfollowingimg"
            />
            <span className="rightbarfollowingname">John Carter</span>
          </div>
          <div className="rightbarfollowing">
            <img
              src="../Assests/person/3.jpg"
              alt=""
              className="rightbarfollowingimg"
            />
            <span className="rightbarfollowingname">John Carter</span>
          </div>
          <div className="rightbarfollowing">
            <img
              src="../Assests/person/4.jpg"
              alt=""
              className="rightbarfollowingimg"
            />
            <span className="rightbarfollowingname">John Carter</span>
          </div>
          <div className="rightbarfollowing">
            <img
              src="../Assests/person/5.jpg"
              alt=""
              className="rightbarfollowingimg"
            />
            <span className="rightbarfollowingname">John Carter</span>
          </div>
          <div className="rightbarfollowing">
            <img
              src="../Assests/person/6.jpg"
              alt=""
              className="rightbarfollowingimg"
            />
            <span className="rightbarfollowingname">John Carter</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarwrapper">
        {profile ? <ProfileRightbar/> : <HomeRightbar/>}
      </div>
    </div>
  );
}

export default RightBar;
