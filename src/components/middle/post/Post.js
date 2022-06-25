import React, { useState } from 'react';
import './post.css';
import {MoreVert} from "@mui/icons-material";
import {Users} from "../../../dummyData";

function Post({post}) {
  const [like,setLike]=useState(post.like)
  const [islike,setIslike]=useState(false)
  const likeHandler=()=>{
    setLike(islike? like-1: like+1)
    setIslike(!islike)
  }
 

  return (
  <div className="post">
    <div className="postwrapper">
      <div className="posttop">
        <div className="posttopleft">
          <img src="../Assests/person/1.jpg" alt="" className='postprofileimage'/>
          <span className="postusername">{Users.filter((u)=>u.id=== post.userId)[0].username}</span>
          <span className="postDate">{post.date}</span>
        </div>
        <div className="posttopright"><MoreVert/></div>
      </div>
      <div className="postcenter">
        <span className="posttext">{post?.desc}</span>
        <img src={post.photo} alt="" srcset="" className='postimg'/>
      </div>
      <div className="postbottom">
        <div className="postbottomleft">
          <img src="../Assests/like.png" alt="" className='imglike' onClick={likeHandler}/>
          <img src="../Assests/heart.png" alt="" className='imglike' onClick={likeHandler}/>
          <span className="postlikecounter">{like}</span>

        </div>
        <div className="postbottomright">
          <span className="postcommenttext">{post.commen}</span>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Post