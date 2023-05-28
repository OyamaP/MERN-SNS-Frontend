import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import TimeLine from "../../components/timeline/TimeLine";
import Rightbar from "../../components/rightbar/Rightbar";
import "./Profile.css";

export default function Profile() {
  const { userId } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    (async () => {
      const res = await axios.get(`/users/${userId}`);
      setUser(res.data);
    })();
  }, [userId]);

  return (
    <>
      <Topbar />
      <div className="profileContainer">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src={`${process.env.REACT_APP_IMAGE_STORAGE_URL}/post/3.jpeg`}
                alt=""
                className="profileCoverImg"
              />
              <img
                src={
                  user.profilePicture
                    ? `${process.env.REACT_APP_IMAGE_STORAGE_URL}${user.profilePicture}`
                    : `${process.env.REACT_APP_IMAGE_STORAGE_URL}/person/noAvatar.png`
                }
                alt=""
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">{user.description}</span>
            </div>
          </div>
          <div className="profileTightBottom">
            <TimeLine profile />
            <Rightbar />
          </div>
        </div>
      </div>
    </>
  );
}
