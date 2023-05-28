import React, { useContext } from "react";
import { AuthContext } from "../../states/AuthContext";
import OnlineFriends from "../friends/OnlineFriends";
import { Users } from "../../dummyData";
import "./Rightbar.css";

export default function Rightbar() {
  const { user } = useContext(AuthContext);

  const HomeRightbar = () => {
    return (
      <>
        <div className="eventContainer">
          <div className="eventAnnounce">
            <img
              src={`${process.env.REACT_APP_IMAGE_STORAGE_URL}/star.png`}
              alt=""
              className="starImg"
            />
            <span className="eventAnnounceTitle">
              <b>フォロワー限定</b>イベント開催中
            </span>
          </div>
          <img
            src={`${process.env.REACT_APP_IMAGE_STORAGE_URL}/event.jpeg`}
            alt=""
            className="eventImg"
          />
        </div>
        <h4 className="rightbarTitle">オンラインの友達</h4>
        <OnlineFriends Users={Users} />
        <h4 className="promotionAdvertisement">プロモーション広告</h4>
        <figure className="promotionContainer">
          <img
            src={`${process.env.REACT_APP_IMAGE_STORAGE_URL}/promotion/promotion1.jpeg`}
            alt=""
            className="promotionImg"
          />
          <figcaption className="promotionName">ショッピング</figcaption>
        </figure>
        <figure className="promotionContainer">
          <img
            src={`${process.env.REACT_APP_IMAGE_STORAGE_URL}/promotion/promotion2.jpeg`}
            alt=""
            className="promotionImg"
          />
          <figcaption className="promotionName">カーショップ</figcaption>
        </figure>
        <figure className="promotionContainer">
          <img
            src={`${process.env.REACT_APP_IMAGE_STORAGE_URL}/promotion/promotion3.jpeg`}
            alt=""
            className="promotionImg"
          />
          <figcaption className="promotionName">テスト株式会社</figcaption>
        </figure>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="userInfo">ユーザー情報</h4>
        <ul className="userInfoList">
          <li>
            <span className="userInfoKey">出身:</span>大阪
          </li>
          <li>
            <span className="userInfoKey">出身:</span>東京
          </li>
        </ul>
        <h4 className="followingUsers">あなたの友達</h4>
        <ul className="followingUsersList">
          <li>
            <img
              src={`${process.env.REACT_APP_IMAGE_STORAGE_URL}/person/1.jpeg`}
              alt=""
              className="followingUserImg"
            />
            <span className="followingUserName">テスト</span>
          </li>
          <li>
            <img
              src={`${process.env.REACT_APP_IMAGE_STORAGE_URL}/person/2.jpeg`}
              alt=""
              className="followingUserImg"
            />
            <span className="followingUserName">テスト</span>
          </li>
          <li>
            <img
              src={`${process.env.REACT_APP_IMAGE_STORAGE_URL}/person/3.jpeg`}
              alt=""
              className="followingUserImg"
            />
            <span className="followingUserName">テスト</span>
          </li>
          <li>
            <img
              src={`${process.env.REACT_APP_IMAGE_STORAGE_URL}/person/4.jpeg`}
              alt=""
              className="followingUserImg"
            />
            <span className="followingUserName">テスト</span>
          </li>
        </ul>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
