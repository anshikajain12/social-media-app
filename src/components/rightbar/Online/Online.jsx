import React from 'react'
import './online.css'
function Online({user}) {
  return (
         <li className="rightbarfriend">
            <div className="rightbarimgcontainer">
              <img src={user.profilePicture} alt="" className="rightbarprofileimg" />
              <span className="rightbaronline"></span>
            </div>
            <span className="rightbarusername">{user.username}</span>
          </li>
  
  )
}

export default Online