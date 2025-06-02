import React, { useState } from "react";

/*
    실습) 숫자 맞추기
    1. 버튼을 클릭했을 때, 랜덤한 숫자 생성하기(1~3)
    
    2. 사용자가 누른 버튼의 값과 랜덤한 숫자 비교하기
    정답인 경우 -> "정답입니다"
    틀린 경우 -> "땡"
*/

const BattleNumber = () => {
    const [myNum, setMyNum] = useState();
    const [ranNum, setRanNum] = useState();
    const [result, setResult] = useState();

    const game = (e) => {
        const selectedNum = Number(e.target.innerText);
        setMyNum(selectedNum);

        const newRanNum = parseInt(Math.random() * 3) + 1;

        setRanNum(newRanNum);

        setResult(selectedNum === newRanNum ? "정답입니다 🎉" : "땡 😭");
    };

    return (
        <div>
            <button onClick={game}>1</button>
            <button onClick={game}>2</button>
            <button onClick={game}>3</button>
            <p>내가 고른 숫자 :{myNum}</p>
            <p>랜덤 선택 숫자 :{ranNum}</p>
            <p>{result}</p>
        </div>
    );
};

export default BattleNumber;
