import React from "react";

const App2 = () => {
    let name = prompt("너의 이름은?");

    // 날짜,시간 관련 정보를 가진 객체
    let today = new Date();
    today.toLocaleDateString(); // 현지 시간 기준 날짜(년/월/일) 반환
    today.getMonth(); // 0~11 값으로 반환 -> +1 더해주는 작업 필요
    let date = today.toLocaleDateString();
    let day = today.getDay();
    let days = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
    let month = today.getMonth() + 1;
    let season = "";
    switch (month) {
        case (12, 1, 2):
            season = "겨울";
            break;
        case (3, 4, 5):
            season = "봄";
            break;
        case (6, 7, 8):
            season = "여름";
            break;
        case (9, 10, 11):
            season = "가을";
            break;
        default:
            break;
    }
    return (
        <div>
            <h1>
                {date}
                {days[day]}
            </h1>
            <hr />
            {name}님 지금은 {season}입니다. 좋은 하루 보내세요:)
        </div>
    );
};

export default App2;
