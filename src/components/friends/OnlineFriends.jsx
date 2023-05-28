import React from "react";
import "./OnlineFriends.css";

export default function OnlineFriends({ Users }) {
  return (
    <ul className="onlineFriendList">
      {Users.map((user) => (
        <li className="onlineFriendData" key={user.id}>
          <div className="onlineFriendProfileImgContainer">
            <img
              src={user.profilePicture}
              alt=""
              className="onlineFriendProfileImg"
            />
            <span className="onlineFriendIcon"></span>
          </div>
          <span className="onlineFriendName">{user.username}</span>
        </li>
      ))}
    </ul>
  );
}
