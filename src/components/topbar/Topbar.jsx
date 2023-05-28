import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Chat, Notifications, Search } from "@mui/icons-material";
import { AuthContext } from "../../states/AuthContext";
import "./Topbar.css";

export default function Topbar() {
  const { user } = useContext(AuthContext);

  return (
    <div className="topbarContainer">
      <div className="topbarleft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Real SNS</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <Search className="searchIcon" />
          <input
            type="text"
            className="searchInput"
            placeholder="探しものは何ですか？"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarItemIcons">
          <div className="topbarItemIcon">
            <Chat />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarItemIcon">
            <Notifications />
            <span className="topbarIconBadge">2</span>
          </div>
          <Link to={`/profile/${user._id}`}>
            <img
              src={
                user.profilePicture
                  ? `${process.env.REACT_APP_IMAGE_STORAGE_URL}${user.profilePicture}`
                  : `${process.env.REACT_APP_IMAGE_STORAGE_URL}/person/noAvatar.png`
              }
              alt=""
              className="topbarImage"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
