import logo from "./logo.svg";
import paper from "./assets/paper.gif";
import loading from "./assets/loading.png";
import "./App.css";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    const regex = /^[0-9]+$/;
    if (regex.test(email)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  const handlePassWord = (e) => {
    setPw(e.target.value);
    const regex = /^[0-9]+$/;
    if (regex.test(pw)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };

  return (
    <div className="host">
      <div className="titleImage">
        <img src={paper} />
      </div>
      <div className="titleImage2">
        <img src={loading} />
      </div>

      <div className="contentWrap">
        <div className="inputWrap">
          <div className="idinput">ID</div>
          <input
            className="input"
            type="text"
            value={email}
            onChange={handleEmail}
          />
        </div>

        <div className="errorMessageWrap">
          {!emailValid && email.length > 0 && (
            <div>올바른 이메일을 입력해주세요.</div>
          )}
        </div>

        <div className="inputWrap">
          <div className="PWinput">PW</div>
          <input
            className="input"
            type="password"
            value={pw}
            onChange={handlePassWord}
          />
        </div>

        <div className="errorMessageWrap">
          {!pwValid && pw.length > 0 && (
            <div> 영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
          )}
        </div>

        <div>
          <button className="bottomButton"> SIGN IN </button>
          <button className="bottomButton2"> SING UP </button>
        </div>
      </div>
    </div>
  );
}
export default Login;
