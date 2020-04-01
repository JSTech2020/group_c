import React from 'react';
import QuizQuestionView from './QuizQuestionView';
import QuizQuestionImageView from './QuizQuestionImageView';
import "./QuizView.css";

function QuizView() {
  return (
    <div className="quiz-view">
      {/* <QuizQuestionView></QuizQuestionView> */}
      <QuizQuestionImageView></QuizQuestionImageView>
    </div>
  );
}

export default QuizView;
