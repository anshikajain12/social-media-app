import React from 'react'
import './share.css';
import { PermMedia} from "@mui/icons-material";

function Share() {
  return (
    <div className="share">
        <div className="sharewrapper"></div>
        <div className="sharetop">
            {/* <img src="/Assests/person/1.jpg" alt="" srcset="" className='shareprofileimage'/> */}
            <input placeholder="What's in your mind safak?" className="shareinput" />
        </div>
        <hr className="sharehr" />
        <div className="sharebottom">
            <div className="shareoptions">
                <PermMedia className="shareicon"/>
                <span className="shareoptiontext">Photo or Video</span>
            </div>
        </div>
    </div>
  )
}

export default Share