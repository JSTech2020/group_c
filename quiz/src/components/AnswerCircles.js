import React from 'react';
import './AnswerCircles.css';
import CorrectAnswerCircle from './CorrectAnswerCircle';

function AnswerCircles({ answersCorrect }) {
  const answers = answersCorrect.map((correct) => {
    return (<CorrectAnswerCircle correct={correct}></CorrectAnswerCircle>);
  });

  return (
    <div className="answer-circles">
      { answers }
    </div>
  );
}

export default AnswerCircles;