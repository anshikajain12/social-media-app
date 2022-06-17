import React from "react";
import "./Topbar.css";
import { Search, Person } from '@mui/icons-material';

function Topbar() {
  return (
    <div className="topbarcomponent">
      <div className="topbarleft">
        <span className="logo">Social Media</span>
      </div>
      <div className="topbarcenter">
        <div className="searchbar">
          <Search />
          <input
            placeholder="Search For friends, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarright">
        <div className="topbarlinks">
          <span className="topbarlink">Homepage</span>
          <span className="topbarlink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
