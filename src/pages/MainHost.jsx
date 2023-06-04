import { BrowserHistory } from "@remix-run/router";
import { useState, useEffect } from "react";
import earth from "../assets/earth.png";
import chart1 from "../assets/chart1.png";
import chart2 from "../assets/chart2.png";
import "../MainHost.css";
import { Link as OriginalLink } from "react-router-dom";

export default function MainHost() {
  return (
    <div className="mainHost">
      <div className="hostTop">
        <img src={earth} class="earth" />
        <div className="hostleft">
          채지훈님 환영합니다.
          <OriginalLink to="/signin">
            <button className="logout"> 로그아웃 </button>
          </OriginalLink>
        </div>
      </div>
      <div className="hostMiddle">
        <div>
          {"<"}관리중인 캠페인 리스트{">"}
        </div>
        <div className="pageChart">
          <img src={chart1} class="chart1" />
          <div className="completedPerson">
            {"⌜"}완료한 사람{"⌟"}
            <br />
            정현수
          </div>

          <img src={chart2} class="chart2" />
          <div className="unKnown">모름</div>
        </div>
      </div>

      <div className="hostBottom">
        <div className="info">
          {"<"}알림판{">"}
        </div>
      </div>
    </div>
  );
}
