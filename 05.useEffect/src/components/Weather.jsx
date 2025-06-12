import React, { useEffect, useState } from "react";
import axios from "axios";

const Weather = () => {
    const city = "Gwangju";
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
    const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);

    const getWeatherData = async () => {
        try {
            const res = await axios.get(WEATHER_URL);
            const data = res.data;
            console.log(data);

            setWeather({
                icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
                temp: data.main.temp,
                city: data.name,
            });
        } catch (error) {
            console.error("Error fetching weather data:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getWeatherData();
    }, []);

    if (loading) {
        return <div>날씨 정보를 불러오는 중...</div>;
    }

    return (
        <div>
            <h1>{new Date().toLocaleDateString()}</h1>
            {weather && (
                <>
                    <img src={weather.icon} alt="날씨 아이콘" />
                    <p>
                        현재 {weather.city}은(는) {weather.temp}℃입니다.
                    </p>
                </>
            )}
        </div>
    );
};

export default Weather;
