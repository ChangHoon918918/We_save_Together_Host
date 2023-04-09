import { BrowserHistory } from "@remix-run/router";
import { useState, useEffect } from "react";
import loading from "../assets/loading.png";
import "../NextSignUp.css";
import { Link as OriginalLink } from "react-router-dom";

export default function NextSignUp() {
  const [rname, setrname] = useState("");
  const [phone, setphone] = useState("");
  const [confirm, setconfirm] = useState("");
  const [address, setaddress] = useState("");

  const [rnameValid, setRNameValid] = useState(false);
  const [phoneValid, setPhoneValid] = useState(false);
  const [confirmValid, setConfirmValid] = useState(false);
  const [addressValid, setAddressValid] = useState(false);

  const handleRName = (e) => {
    setrname(e.target.value);

    const regex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (regex.test(rname)) {
      setRNameValid(true);
    } else {
      setRNameValid(false);
    }
  };

  const handlePhone = (e) => {
    setphone(e.target.value);

    const regex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (regex.test(phone)) {
      setPhoneValid(true);
    } else {
      setPhoneValid(false);
    }
  };

  const handleConfirm = (e) => {
    setconfirm(e.target.value);

    const regex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (regex.test(confirm)) {
      setConfirmValid(true);
    } else {
      setConfirmValid(false);
    }
  };

  const handleAddress = (e) => {
    setaddress(e.target.value);

    const regex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (regex.test(address)) {
      setAddressValid(true);
    } else {
      setAddressValid(false);
    }
  };

  return (
    <div className="nextSignUp">
      <div className="nextSignUpImage">
        <img src={loading} />
      </div>

      <div className="contentWrap">
        <div className="inputWrap">
          <div className="idinput">NAME</div>
          <input
            className="input"
            type="text"
            value={rname}
            onChange={(e) => handleRName(e)}
          />
        </div>

        <div className="inputWrap">
          <div className="idinput">PHONE</div>
          <input
            className="input"
            type="text"
            value={phone}
            onChange={(e) => handlePhone(e)}
          />
        </div>

        <div className="inputWrap">
          <div className="idinput"> CONFRIM </div>
          <input
            className="input"
            type="text"
            value={confirm}
            onChange={(e) => handleConfirm(e)}
          />
        </div>

        <div className="inputWrap">
          <div className="idinput">ADDRESS</div>
          <input
            className="input"
            type="text"
            value={rname}
            onChange={(e) => handleAddress(e)}
          />
        </div>

        <div>
          <OriginalLink to="/signup">
            <button className="bottomButton3"> BACK </button>
          </OriginalLink>
          <OriginalLink to="/signin">
            <button className="bottomButton4"> COMPLETE </button>
          </OriginalLink>
        </div>
      </div>
    </div>
  );
}
