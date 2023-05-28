import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../states/AuthContext";
import Share from "../share/Share";
import Post from "../post/Post";
import "./TimeLine.css";

export default function TimeLine({ profile }) {
  const { user } = useContext(AuthContext);

  const userId = user._id;
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    (async () => {
      if (!userId) return;
      const res = profile
        ? await axios.get(`/posts/profile/${userId}`)
        : await axios.get(`/posts/timeline/${userId}`);
      setPosts(res.data);
    })();
  }, [userId, profile]);

  return (
    <div className="timeline">
      <div className="timelineWrapper">
        <Share />
        {posts.map((post) => (
          <Post post={post} key={post._id} />
        ))}
      </div>
    </div>
  );
}
