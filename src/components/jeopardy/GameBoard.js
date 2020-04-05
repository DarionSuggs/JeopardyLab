import React from 'react';
import AnswerForm from "./AnswerForm";


function GameBoard(props) {
    const category = props.data.category && props.data.category.title;


    return (
        <div className="GameBoard">
            <h2>{category}</h2>
        <h3>${props.data.value}</h3>
        <div className="clue">{props.data.question}</div>
        <AnswerForm checkAnswer={props.checkAnswer} />
        <br />
        <div className="score">Your winnings: ${props.score}</div>
        </div>
    )
}

export default GameBoard;