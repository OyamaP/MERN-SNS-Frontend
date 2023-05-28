import React, { useContext, useRef } from "react";
import { loginCall } from "../../actionCalls";
import { AuthContext } from "../../states/AuthContext";
import "./Login.css";

export default function Login() {
  const { dispatch } = useContext(AuthContext);
  const email = useRef();
  const password = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await loginCall(
      {
        email: email.current.value,
        password: password.current.value,
      },
      dispatch
    );
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Real SNS</h3>
          <span className="loginDesc">本格的なSNSを自分の手で</span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={(e) => handleSubmit(e)}>
            <p className="loginMsg">ログインはこちら</p>
            <input
              ref={email}
              type="email"
              className="loginInput"
              placeholder="email"
              required
            />
            <input
              ref={password}
              type="password"
              className="loginInput"
              placeholder="password"
              required
              minLength="6"
            />
            <button className="loginButton">ログイン</button>
            <span className="loginForgot">パスワードを忘れた方へ</span>
            <button className="loginRegisterButton">アカウント作成</button>
          </form>
        </div>
      </div>
    </div>
  );
}
