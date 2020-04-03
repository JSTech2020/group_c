import React from 'react';
import AnswerButtons from './AnswerButtons';
import "./QuizQuestionView.css";

function QuizQuestionView({ children }) {
  const question = "What is the answer???";
  const qNo = 1;
  const qAll = 7;
  return (
    <div className="quiz-question-view">
      <div className="quiz-question-content">
        <div className="question-area">
          <div className="question-index">
            Frage {qNo} von {qAll}
          </div>
          <div className="the-question">
            {question}
          </div>
        </div>
        <div className="media-area">
          {children}
        </div>
        <div className="answer-buttons-area">
          <AnswerButtons></AnswerButtons>
        </div>
      </div>
    </div>
  );
}

export default QuizQuestionView;