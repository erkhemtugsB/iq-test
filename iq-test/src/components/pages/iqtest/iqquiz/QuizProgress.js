import React from 'react';

function QuizProgress({ currentQuiz, totalQuizzes }) {
  return (
    <div className="quiz-progress">
      <p>Quiz {currentQuiz + 1} of {totalQuizzes}</p>
    </div>
  );
}

export default QuizProgress;