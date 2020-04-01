import React from 'react';
import "./QuizButton.css";

function QuizButton(props) {
  return (
    <button className="quiz-button">
      {props.text}
    </button>
  );
}

export default QuizButton;