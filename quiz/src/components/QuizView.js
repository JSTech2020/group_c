import React, { useState } from 'react';
import "./QuizView.css";
import TimerBar from './TimerBar';
import QuizQuestionView from './QuizQuestionView';
import QuizQuestionImageView from './QuizQuestionImageView';
import AnswerCircles from './AnswerCircles';
import { mockDataQuestions } from "./../mockDataQuestions";

function QuizView() {
  const questions = mockDataQuestions;
  const [userAnswers, setUserAnswers] = useState(mockDataQuestions.map(() => null));
  const [questionIndex, setQuestionIndex] = useState(0);
  const [resetTimer, setResetTimer] = useState(false);

  const currentQuestion = questions[questionIndex];

  // Callback for when the user clicks on an answer
  const userSelectAnswer = (answerNumber) => {
    // Update the users answers
    const newAnswers = userAnswers.map((answer, index) => {
      if (index === questionIndex) return answerNumber;
      else return answer;
    })
    setUserAnswers(newAnswers);

    // Update question index
    setQuestionIndex(questionIndex + 1);

    // Reset the timer
    setResetTimer(true);
  }

  // Callback for reseting the reset timer variable :)
  const resetTimerCallback = () => setResetTimer(false);


  const results = userAnswers.map((quizAnswer, index) => {
    if (quizAnswer === null) return null;
    return questions[index].correctAnswer === quizAnswer;
  });

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
    <div className="quiz-view">
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




export default QuizView;
