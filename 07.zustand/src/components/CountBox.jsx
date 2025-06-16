import React from "react";
import useCountStore from "../stores/useCountStore";

const CountBox = () => {
    const { count } = useCountStore();
    return (
        <div>
            <h3>CountBox:{count}</h3>
        </div>
    );
};

export default CountBox;
