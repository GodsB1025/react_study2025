import React from "react";

const Weather = () => {
    let city = "Gwangju";
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
    const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    console.log(WEATHER_URL);

    return (
        <div>
            <h1>2025.06.11</h1>
            <img src="#" alt="날씨 아이콘" />
            <p>현재 000은 00.0℃입니다.</p>
        </div>
    );
};

export default Weather;
