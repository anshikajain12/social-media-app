import React from 'react'
import './close.css'
function Close({user}) {
  return (
    <li className="sidebarfriend">
    <img src={user.profilePicture} alt="" className="sidebarfriendimg" />
    <span className="sidebarfriendname">{user.username}</span>
  </li>
  )
}

export default Close