import React from "react";
import "./Button.css";

const Button = ({ onClick, onContext, row, col, state, value, red }) => {
    const displayContent = () => {
        if (state === 2) {
            return <span>F</span>;
        }

        if (state === 1) {
            if (value === -1) {
                return <span>O</span>;
            }

            if (value > 0) {
                return value;
            }
        }
        return null;
    };

    return (
        <div className={`MineButton value-${value} ${state === 1 ? "visable" : ""} ${red ? "red" : ""}`} onClick={onClick(row, col)} onContextMenu={onContext(row, col)}>
            {displayContent()}
        </div>
    );
};

export default Button;