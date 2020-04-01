import React from 'react';
import QuizQuestionView from './QuizQuestionView';
import './QuizQuestionImageView.css';

import imgDemo from './../images/nature.jpg'; // import demo

function QuizQuestionImageView() {
  return (
    <QuizQuestionView>
      <img src={imgDemo} alt="Demo"></img>
    </QuizQuestionView>
  );
}

export default QuizQuestionImageView;