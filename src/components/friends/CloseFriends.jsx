import React from "react";
import "./CloseFriends.css";

export default function CloseFriends({ Users }) {
  return (
    <ul className="closeFriendsList">
      {Users.map((user) => (
        <li className="closeFriendData" key={user.id}>
          <img
            src={user.profilePicture}
            alt=""
            className="closeFriendProfileImg"
          />
          <span className="closeFriendName">{user.username}</span>
        </li>
      ))}
    </ul>
  );
}
