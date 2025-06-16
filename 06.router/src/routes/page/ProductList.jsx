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
    const goToProduct = (e) => {
        if (e.target.innerText === "ProductDetail 이동") {
            navigate("/prdDetail/1");
        } else {
            navigate("/prdDetail2?pro_no=15&cate=pants");
        }
    };

    return (
        <div>
            <h1>ProductList</h1>
            <button onClick={goToHome}>Home 이동</button>
            <button onClick={goToAbout}>About 이동</button>
            <button onClick={goToProduct}>ProductDetail 이동</button>
            <button onClick={goToProduct}>ProductDetail2 이동</button>
        </div>
    );
};

export default ProductList;
