import React from "react";
import { Link } from "react-router";

const Home = () => {
    // HTML a 태그 대신 사용하는 Link 컴포넌트
    return (
        <div>
            <h1>Home</h1>
            <Link to={"/about"}>About 이동</Link>
            <Link to={"/prdList"}>ProductList 이동</Link>
            <br />
            <Link to={"/mypage"}>MyPage 이동</Link>
        </div>
    );
};

export default Home;
