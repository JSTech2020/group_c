import React, { useState } from 'react';
import "./QuizView.css";
import { mockDataQuestions } from "./../mockDataQuestions";
import QuizGameView from './QuizGameView';
import QuizFinishView from './QuizFinishView';

function QuizView() {
  const questions = mockDataQuestions;
  const [userAnswers, setUserAnswers] = useState(questions.map(() => null));

  const userAnswerClick = (answerNumber, questionIndex) => {
    // Update the users answers
    const newAnswers = userAnswers.map((answer, index) => {
      if (index === questionIndex) return answerNumber;
      else return answer;
    })
    setUserAnswers(newAnswers);
  }

  const results = userAnswers.map((quizAnswer, index) => {
    if (quizAnswer === null) return null;
    return questions[index].correctAnswer === quizAnswer;
  });

  const [gameIsRunning, setGameIsRunning] = useState(true);
  const gameOverCallback = () => {
    setGameIsRunning(false);
  }

  const gameView = (
    <QuizGameView
      questions={questions}
      gameOverCallback={gameOverCallback}
      results={results}
      userAnswerClick={userAnswerClick}
    ></QuizGameView>
  );

  const gameFinishView = (
    <QuizFinishView
      results={results}
    ></QuizFinishView>
  );
  return (
    <div className="quiz-view whole-page">
      {/* { gameFinishView } */}
      { gameIsRunning ? gameView : gameFinishView }
    </div>
  );
}




export default QuizView;
