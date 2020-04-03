import React from 'react';
import TimerBar from './TimerBar';
import QuizQuestionView from './QuizQuestionView';
import QuizQuestionImageView from './QuizQuestionImageView';
import "./QuizView.css";
import AnswerCircles from './AnswerCircles';

function QuizView() {
  const results = [false, true, false, null, null, null, null];
  return (
    <div className="quiz-view">
      <TimerBar fullTime={40}></TimerBar>
      {/* <QuizQuestionView></QuizQuestionView> */}
      <QuizQuestionImageView></QuizQuestionImageView>
      <AnswerCircles answersCorrect={results}></AnswerCircles>
    </div>
  );
}

export default QuizView;
