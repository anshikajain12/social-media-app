import React from 'react'
import './share.css';
import { PermMedia,Label,Room ,EmojiEmotions} from "@mui/icons-material";

function Share() {
  return (
    <div className="share">
        <div className="sharewrapper"></div>
        <div className="sharetop">
            <img src="/Assests/person/1.jpg" alt="" srcset="" className='shareprofileimage'/>
            <input placeholder="What's in your mind safak?" className="shareinput" />
        </div>
        <hr className="sharehr" />
        <div className="sharebottom">
            <div className="shareoptions">
                <PermMedia htmlColor="tomato" className="shareicon"/>
                <span className="shareoptiontext">Photo or Video</span>
            </div>
            <div className="shareoptions">
                <Label  htmlColor="blue" className="shareicon"/>
                <span className="shareoptiontext">Tag</span>
            </div>
            <div className="shareoptions">
                <Room  htmlColor="green" className="shareicon"/>
                <span className="shareoptiontext">Locations</span>
            </div>
            <div className="shareoptions">
                <EmojiEmotions  htmlColor="goldenrod" className="shareicon"/>
                <span className="shareoptiontext">Feelings</span>
            </div>
        </div>
        <button className="sharebuttons">Share</button>
    </div>
  )
}

export default Share