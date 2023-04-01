import { createBrowserHistory } from "@remix-run/router";
import loading from "../assets/loading.png";
import { useState, useEffect } from "react";
import { Link as OriginalLink } from "react-router-dom";
import "../SignUp.css";

export default function SignUp() {
  //ID, EMAIL, PW, CONFRIM Check
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  //유효성검사
  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    const regex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (regex.test(email)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  const handlePassWord = (e) => {
    setPw(e.target.value);
    const regex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if (regex.test(pw)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };

  useEffect(() => {
    if (pw === passwordConfirm) {
      setIsPasswordConfirm(true);
    } else {
      setIsPasswordConfirm(false);
    }
  }, [pw, passwordConfirm]);

  return (
    <div className="enterInfo">
      <div className="signUpImage">
        <img src={loading} />
      </div>

      <div className="contentWrap">
        <div className="inputWrap">
          <div className="idinput">ID</div>
          <input
            className="input"
            type="text"
            value={email}
            onChange={(e) => handleEmail(e)}
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
            onChange={(e) => handlePassWord(e)}
          />
        </div>

        <div className="errorMessageWrap">
          {!pwValid && pw.length > 0 && (
            <div> 영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
          )}
        </div>

        <div className="inputWrap">
          <div className="PWinput"> CONFIRM </div>
          <input
            onChange={(e) => setPasswordConfirm(e.target.value)}
            value={passwordConfirm}
            type="password"
            className="input"
          />
        </div>

        <div className="errorMessageWrap">
          {!isPasswordConfirm && <div> </div>}
        </div>

        <div className="inputWrap">
          <div className="idinput"> Email </div>
          <input
            className="input"
            type="text"
            value={email}
            onChange={(e) => handleEmail(e)}
          />
        </div>

        <div className="errorMessageWrap">
          {!emailValid && email.length > 0 && (
            <div>올바른 이메일을 입력해주세요.</div>
          )}
        </div>

        <div>
          <OriginalLink to="/signin">
            <button className="bottomButton"> BACK </button>
          </OriginalLink>
          <OriginalLink to="/nextsignup">
            <button className="bottomButton2"> NEXT </button>
          </OriginalLink>
        </div>
      </div>
    </div>
  );
}
