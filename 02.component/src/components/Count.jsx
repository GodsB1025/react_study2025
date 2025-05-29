import React, { useState } from "react";

const Count = () => {
    let count = 0;
    // state 선언
    const [count2, setCount2] = useState(0);

    const increase = () => {
        count += 1;
    };
    const decrease = () => {
        count -= 1;
    };
    const increase2 = () => {
        setCount2(count2 + 1);
    };
    const decrease2 = () => {
        setCount2(count2 - 1);
    };
    return (
        <div>
            <div>
                <p>일반변수:{count}</p>
                <button onClick={increase}>+1</button>
                <button onClick={decrease}>-1</button>
            </div>
            <div>
                <p>state변수:{count2}</p>
                <button onClick={increase2}>+1</button>
                <button onClick={decrease2}>-1</button>
            </div>
        </div>
    );
};

export default Count;
