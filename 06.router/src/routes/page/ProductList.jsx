import React from "react";
import { useNavigate } from "react-router";

const ProductList = () => {
    // 페이지를 이동할 때 사용하는 훅 useNavigate()
    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/");
    };
    const goToAbout = () => {
        navigate("/about");
    };

    return (
        <div>
            <h1>ProductList</h1>
            <button onClick={goToHome}>Home 이동</button>
            <button onClick={goToAbout}>About 이동</button>
        </div>
    );
};

export default ProductList;
