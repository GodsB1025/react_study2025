import React, { useEffect, useState } from "react";
/* 
    실습 ) 참참참 게임
    1. 사용자는 공격, 컴퓨터는 수비 역할
    2. 좌, 정면, 우 방향중 하나를 클릭했을 때, 사용자와 컴퓨터의 선택을 비교합니다.
     - 같은 선택일 경우: 사용자의 승리
     - 다른 선택일 경우: 컴퓨터의 승리
    3. 결과를 화면에 출력합니다.

    좌,정면,우 값은 배열로 만들어서 활용
    사용자, 컴퓨터, 결과값에 대한 state 생성


*/

const ChamChamCham = () => {
    const [userCham, setUserCham] = useState("");
    const [comCham, setComCham] = useState("");
    const [result, setResult] = useState("");
    const Cham = ["좌", "정면", "우"];

    const handleClick = (e) => {
        const comNum = parseInt(Math.random() * 3);
        setUserCham(e.target.innerText);
        setComCham(Cham[comNum]);
    };

    useEffect(() => {
        if (userCham !== "") {
            userCham === comCham ? setResult("게임 결과 : 승리") : setResult("게임 결과 : 패배");
        }
    }, [userCham, comCham]);

    return (
        <div>
            <h1>참참참 게임!</h1>
            <h3>나의 선택 : {userCham}</h3>
            <h3>컴퓨터의 선택 : {comCham}</h3>
            <h3>{result}</h3>
            <button onClick={handleClick}>좌</button>
            <button onClick={handleClick}>정면</button>
            <button onClick={handleClick}>우</button>
        </div>
    );
};

export default ChamChamCham;
