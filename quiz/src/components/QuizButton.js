import React from 'react';
import "./QuizButton.css";

function QuizButton({ text, onClick }) {
  return (
    <button className="quiz-button" onClick={onClick}>
      {text}
    </button>
  );
}

export default QuizButton;