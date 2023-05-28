import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { loginCall } from "../../actionCalls";
import { AuthContext } from "../../states/AuthContext";
import "./Register.css";

export default function Register() {
  const { dispatch } = useContext(AuthContext);
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordConfirm = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isSamePassword =
      password.current.value === passwordConfirm.current.value;
    if (!isSamePassword) {
      alert("パスワードが違います");
      return;
    }
    try {
      await axios.post("/auth/register", {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      });
      // 登録成功したらログイン処理を実行
      await loginCall(
        {
          email: email.current.value,
          password: password.current.value,
        },
        dispatch
      );
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">Real SNS</h3>
          <span className="registerDesc">本格的なSNSを自分の手で</span>
        </div>
        <div className="registerRight">
          <form className="registerBox" onSubmit={(e) => handleSubmit(e)}>
            <p className="registerMsg">新規登録はこちら</p>
            <input
              ref={username}
              type="text"
              className="registerInput"
              placeholder="username"
              required
            />
            <input
              ref={email}
              type="email"
              className="registerInput"
              placeholder="email"
              required
            />
            <input
              ref={password}
              type="password"
              className="registerInput"
              placeholder="password"
              required
              minLength="6"
            />
            <input
              ref={passwordConfirm}
              type="password"
              className="registerInput"
              placeholder="password confirm"
              required
              minLength="6"
            />
            <button className="registerButton" type="submit">
              サインアップ
            </button>
            <Link to="/login" className="loginButton">
              ログイン
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
