import React from 'react';
import './question.css'

function Question({ question, handleAnswer }) {

  return (
    <div className="question">
      <h2>{question.questionImg}</h2>
      <div className="options">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option.isCorrect)}
          >
            {option.optionText}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
