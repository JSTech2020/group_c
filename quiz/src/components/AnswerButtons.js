import React from 'react';
import QuizButton from './QuizButton';
import './AnswerButtons.css';

function AnswerButtons() {
  const answers = ["answer1", "answer2", "answer3", "answer4"];

  const buttons = answers.map(answer =>
    <QuizButton
      key={answer}
      text={answer}
    ></QuizButton>
  );

  return (
    <div className="answer-buttons">
      {buttons}
    </div>
  );
}

export default AnswerButtons;