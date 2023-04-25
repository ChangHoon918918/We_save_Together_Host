import logo from "../logo.svg";
import paper from "../assets/paper.gif";
import loading from "../assets/loading.png";
import "../App.css";
import { useState } from "react";
import { Link as OriginalLink } from "react-router-dom";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [name, setName] = useState("");

  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [isName, setIsName] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
    const regex = /^[a-zA-z0-9]{4,12}$/;
    if (regex.test(name)) {
      setIsName(true);
    } else {
      setIsName(false);
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
            value={name}
            onChange={handleName}
          />
        </div>

        <div className="errorMessageWrap">
          {!isName && name.length > 0 && (
            <div>올바른 아이디를 입력해주세요.</div>
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
          <OriginalLink>
            <button className="bottomButton3"> SIGN IN </button>
          </OriginalLink>
          <OriginalLink to="/signup">
            <button className="bottomButton4"> SIGN UP </button>
          </OriginalLink>
        </div>
      </div>
    </div>
  );
}
