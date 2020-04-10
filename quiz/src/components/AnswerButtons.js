import React from 'react';
import QuizButton from './QuizButton';
import './AnswerButtons.css';

function AnswerButtons({ answers, onClick }) {

  const buttons = answers.map((answer, index) =>
    <QuizButton
      key={index}
      text={answer}
      onClick={() => onClick(index)}
    ></QuizButton>
  );

  return (
    <div className="answer-buttons">
      {buttons}
    </div>
  );
}

export default AnswerButtons;