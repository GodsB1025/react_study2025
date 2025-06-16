import React from "react";
import { useState } from "react";
import CountBox from "./CountBox";
import useCountStore from "../stores/useCountStore";

const Count = () => {
    // const [count, setCount] = useState(0);
    const { count, increase, decrease, increaseBy } = useCountStore();

    return (
        <div>
            <h1>Count:{count}</h1>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
            <button onClick={() => increaseBy(+98765999999991)}>+98765999999991</button>
            <CountBox />
        </div>
    );
};

export default Count;
