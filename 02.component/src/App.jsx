import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MenuBox from "./components/MenuBox";
import MemberInfo from "./components/MemberInfo";
import Count from "./components/Count";

/*
  1. Component
  UI를 표현하는 최소 단위
  컴포넌트를 만들 때 파일명은 반드시 대문자로 정의

  2. props
  리액트는 상위에서 하위로 데이터를 전달하는 방식(단반향)
  값을 전달하는 방식은 객체{key:value}로 전달

*/
function App() {
    return (
        <>
            {/* <div>
                <h1>아메리카노</h1>
                <p>2000</p>
            </div> */}

            {/* <div>
                <h1>아이스티</h1>
                <p>2500</p>
            </div>
            <div>
                <h1>프라푸치노</h1>
                <p>4000</p>
            </div> */}

            {/* <MenuBox menuNm={"아메리카노"} price={2000} />
            <MenuBox menuNm={"아이스티"} price={2500} />
            <MenuBox menuNm={"프라푸치노"} price={4000} /> */}

            {/* 실습) 야구팀 대표 선수 정보(야구팀명, 투수명) 출력해보기 */}
            {/* <div className="info">   
                <MemberInfo team={"KIA 타이거즈"} name={"김도영"} />
                <MemberInfo team={"KIA 타이거즈"} name={"최형우"} />
                <MemberInfo team={"KIA 타이거즈"} name={"양현종"} />
                <MemberInfo team={"KIA 타이거즈"} name={"네일"} />
            </div> */}

            {/* state 실습 */}
            <Count />
        </>
    );
}

export default App;
