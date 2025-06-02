import React, { useState } from "react";

const LikeCount2 = () => {
    const [num, setNum] = useState(0);

    const increase = () => {
        setNum(num + 1);
    };
    const decrease = () => {
        if (num > 0) {
            setNum(num - 1);
        }
    };

    return (
        <div className="like">
            <img style={{ width: 300, height: 350 }} src={"src/assets/img/moongchi.jpg"} alt={"뭉치"} />
            <p>좋아요{num}</p>
            <button onClick={increase}>💖</button>
            {/* <button onClick={()=>setNum(num+1)}>💖</button> */}
            <button onClick={decrease}>💔</button>
            {/* <button onClick={({ num }) => (num > 0 ? setNum(num - 1) : setNum(num))}>💖</button> */}
        </div>
    );
};

export default LikeCount2;
