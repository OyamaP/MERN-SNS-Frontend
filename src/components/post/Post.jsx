import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../states/AuthContext";
import { format } from "timeago.js";
import { MoreVert } from "@mui/icons-material";
import "./Post.css";

export default function Post({ post }) {
  const { user } = useContext(AuthContext);

  const [like, setLike] = useState(post.likes.length || 0);
  const [isLiked, setIsLiked] = useState(post.likes.includes(user._id));
  const handleLike = async () => {
    try {
      await axios.put(`posts/${post._id}/like`, {
        userId: user._id,
      });
      setLike(isLiked ? like - 1 : like + 1);
      setIsLiked(!isLiked);
    } catch (e) {
      console.error(e);
    }
  };

  const [poster, setPoster] = useState({});
  useEffect(() => {
    (async () => {
      const res = await axios.get(`/users/${post.userId}`);
      setPoster(res.data);
    })();
  }, [post]);
  // 投稿リストからユーザー情報を取得できなければ表示しない
  if (poster === undefined) return;

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link
              to={`/profile/${poster._id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <img
                src={
                  poster.profilePicture
                    ? `${process.env.REACT_APP_IMAGE_STORAGE_URL}${poster.profilePicture}`
                    : `${process.env.REACT_APP_IMAGE_STORAGE_URL}/person/noAvatar.png`
                }
                alt=""
                className="postProfileImg"
              />
              <span className="posterName">{poster.username}</span>
            </Link>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.description} </span>
          <img
            src={
              post.imgPath
                ? `${process.env.REACT_APP_IMAGE_STORAGE_URL}${post.imgPath}`
                : ""
            }
            alt=""
            className="postImg"
          />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              src={`${process.env.REACT_APP_IMAGE_STORAGE_URL}/heart.png`}
              alt=""
              className="likeIcon"
              onClick={() => handleLike()}
            />
            <span className="postLikeCounter">
              {like}人がいいねを押しました
            </span>
          </div>
          <div className="postBottomRight">
            <div className="postCommentText">{post.comment || 0}コメント</div>
          </div>
        </div>
      </div>
    </div>
  );
}
