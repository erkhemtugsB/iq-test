import React, { useState } from 'react';
import Question from './Question';
import quizData from './QuizData';
import QuizProgress from './QuizProgress';
import './quiz.css'

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz">
      {!showScore && <QuizProgress currentQuiz={currentQuestion} totalQuizzes={quizData.length} />}
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {quizData.length}
        </div>
      ) : (
        <>
          <Question
            question={quizData[currentQuestion]}
            handleAnswer={handleAnswer}
          />
        </>
      )}
    </div>
  );
}

export default Quiz;
