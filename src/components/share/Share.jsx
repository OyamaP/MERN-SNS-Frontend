import React, { useContext, useState, useRef } from "react";
import axios from "axios";
import { Analytics, Face, Gif, Image } from "@mui/icons-material";
import { AuthContext } from "../../states/AuthContext";
import "./Share.css";

export default function Share() {
  const { user } = useContext(AuthContext);

  const [file, setFile] = useState(null);
  const desc = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      description: desc.current.value,
    };

    try {
      if (file) newPost.imgPath = await uploadImage();
      await axios.post("/posts", newPost);
      // TODO: 投稿をSPAで更新したい
      window.location.reload();
    } catch (e) {
      console.error(e);
    }
  };

  const uploadImage = async () => {
    const data = new FormData();
    const fileName = `${Date.now()}_${file.name}`;
    data.append("dir", "post");
    // file を最後にappendしないとその他データが転送されない
    data.append("file", file, fileName);

    try {
      await axios.post("/upload", data);
      return `/post/${fileName}`;
      // return fileName;
    } catch (e) {
      console.error(e);
      throw new Error("画像のアップロードに失敗しました");
    }
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src={
              user.profilePicture
                ? `${process.env.REACT_APP_IMAGE_STORAGE_URL}${user.profilePicture}`
                : `${process.env.REACT_APP_IMAGE_STORAGE_URL}/person/noAvatar.png`
            }
            alt=""
            className="shareProfileImg"
          />
          <input
            ref={desc}
            type="text"
            className="shareInput"
            placeholder="今何してるの？"
          />
        </div>
        <hr className="shareHr" />
        <form className="shareButtons" onSubmit={(e) => handleSubmit(e)}>
          <div className="shareOptions">
            <label className="shareOption" htmlFor="file">
              <Image className="shareIcon" htmlColor="blue" />
              <span className="shareOptionText">写真</span>
              <input
                type="file"
                id="file"
                accept=".png, .jpg, .jpeg"
                style={{ display: "none" }}
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
            <div className="shareOption">
              <Gif className="shareIcon" htmlColor="hotpink" />
              <span className="shareOptionText">GIF</span>
            </div>
            <div className="shareOption">
              <Face className="shareIcon" htmlColor="green" />
              <span className="shareOptionText">気持ち</span>
            </div>
            <div className="shareOption">
              <Analytics className="shareIcon" htmlColor="red" />
              <span className="shareOptionText">投票</span>
            </div>
          </div>
          <button className="shareButton" type="submit">
            投稿
          </button>
        </form>
      </div>
    </div>
  );
}
