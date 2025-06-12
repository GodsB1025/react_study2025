import React, { useEffect, useState } from "react";
import axios from "axios";
const MovieList = () => {
    let targetDt = "20250611";
    const key = import.meta.env.VITE_MOVIE_API_KEY;
    const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=${targetDt}`;

    const [movies, setMovies] = useState();

    const getMovieList = async () => {
        const res = await axios.get(url);
        const data = res.data;
        const movieList = data.boxOfficeResult.dailyBoxOfficeList;
        setMovies(
            movieList.map((movie, index) => (
                <p key={index}>
                    {movie.rank}. {movie.movieNm} | {movie.openDt === " " ? "미개봉" : movie.openDt}
                </p>
            ))
        );
    };

    useEffect(() => {
        getMovieList();
    }, []);
    return (
        <div>
            <h1>영화 순위</h1>
            {movies}
        </div>
    );
};

export default MovieList;
