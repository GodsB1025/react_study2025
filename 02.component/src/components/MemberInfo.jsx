import React from "react";

const MemberInfo = ({ team, name }) => {
    return (
        <div className="player">
            <p>{team}</p>
            <p>{name}</p>
        </div>
    );
};

export default MemberInfo;
