import React from 'react';
import './../ScoreboardStyle/box.css';

export const Box = (props) => {
    return (
        <button className='board_box' onClick={props.onClick}>
            {props.value}
        </button>
    )
};