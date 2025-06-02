import React, { useState } from "react";

const LikeCount = () => {
    const [num, setNum] = useState(0);
    const [emoji, setEmoji] = useState("🤍");

    const handleClick = () => {
        if (emoji === "🤍") {
            setEmoji("💗");
            setNum(num + 1);
        } else {
            setEmoji("🤍");
            setNum(num - 1);
        }
    };

    return (
        <div>
            <img style={{ width: 300, height: 350 }} src={"src/assets/img/moongchi.jpg"} alt={"뭉치"} />
            <p>
                <span onClick={handleClick}>{emoji}</span>좋아요{num}개
            </p>
        </div>
    );
};

export default LikeCount;
