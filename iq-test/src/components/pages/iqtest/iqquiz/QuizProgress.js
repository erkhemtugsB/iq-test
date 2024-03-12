import React from 'react';
import './quiz.css'

function QuizProgress({ currentQuiz, totalQuizzes }) {
  return (
    <div className="quiz-progress">
      <p>Тэст {currentQuiz + 1}/{totalQuizzes}</p>
    </div>
  );
}

export default QuizProgress;