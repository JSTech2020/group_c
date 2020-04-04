import React, { useState } from 'react';
import "./QuizGameView.css";
import TimerBar from './TimerBar';
import QuizQuestionView from './QuizQuestionView';
import QuizQuestionImageView from './QuizQuestionImageView';
import AnswerCircles from './AnswerCircles';

function QuizGameView({ questions, gameOverCallback, results, userAnswerClick }) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [resetTimer, setResetTimer] = useState(false);

  const currentQuestion = questions[questionIndex];

  // Callback for when the user clicks on an answer
  const userSelectAnswer = (answerNumber) => {
    userAnswerClick(answerNumber, questionIndex);

    // Check if there are still questions remaining
    if (questionIndex + 1 < questions.length) {
      setQuestionIndex(questionIndex + 1);
      setResetTimer(true);
    } else {
      gameOverCallback();
    }
  }

  // Callback for reseting the reset timer variable :)
  const resetTimerCallback = () => setResetTimer(false);

  // (could move QuizQuestionImageView to the same component...?)
  let currentQuestionView;
  if (currentQuestion.image) {
    currentQuestionView = (
      <QuizQuestionImageView
        question={currentQuestion}
        questionCount={questions.length}
        questionIndex={questionIndex + 1}
        onClick={userSelectAnswer}
      ></QuizQuestionImageView>
    );
  } else {
    currentQuestionView = (
      <QuizQuestionView
        question={currentQuestion}
        questionCount={questions.length}
        questionIndex={questionIndex + 1}
        onClick={userSelectAnswer}
      >
      </QuizQuestionView>
    );
  }

  return (
    <div className="quiz-game-view">
      <TimerBar
        fullTime={15}
        resetTimer={resetTimer}
        resetTimerCallback={resetTimerCallback}
        timeOutCallback={() => userSelectAnswer(-1)}
      ></TimerBar>
      { currentQuestionView }
      <AnswerCircles answersCorrect={results}></AnswerCircles>
    </div>
  );
}




export default QuizGameView;
