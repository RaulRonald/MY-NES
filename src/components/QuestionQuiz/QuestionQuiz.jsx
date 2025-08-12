import React from 'react';

const QuestionQuiz = ({ questionData, handleAnswer, userAnswer }) => {


  const getButtonClass = (option) => {
   
    if (!userAnswer) {
      return ''; 
    }

    if (option.correct) {
      return 'is-success'; 
    }
   
    if (userAnswer.id === option.id) {
      return 'is-error'; 
    }
    return 'is-disabled';
  };

  return (
    <div className="nes-container with-title is-centered bg-white p-4">
      <p className="title font-press-start text-sm md:text-base">{questionData.item || `Question ${questionData.id}`}</p>
      
      <h2 className="text-center my-4 text-sm md:text-lg">{questionData.question}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {questionData.options.map((option) => (
          <button
            key={option.id}
            type="button"
           
            disabled={!!userAnswer} 
            onClick={() => handleAnswer(option)}
            
            className={`nes-btn ${getButtonClass(option)}`}
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionQuiz;