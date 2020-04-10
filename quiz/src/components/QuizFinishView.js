import React from 'react';
import './QuizFinishView.css';

function QuizFinishView({ results }) {
  const all = results.length;
  const correct = results.filter(result => result).length;
  return (
    <div className="quiz-finish-view">
      <div className="congratulations">Glückwunsch!</div>
      <div className="message">
        Du hast { correct } von { all } Fragen richtig beantwortet!
      </div>
    </div>
  );
}

export default QuizFinishView;