import { useState, useEffect } from 'react';
import QuestionQuiz from '../QuestionQuiz/QuestionQuiz'; 

const QuizSlider = () => {
  const [quizData, setQuizData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState(null); 
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    fetch('/quiz.json')
      .then(res => res.json())
      .then(data => {
        setQuizData(data);
        setIsLoading(false);
      });
  }, []);


  useEffect(() => {
    if (quizData.length > 0 && !userAnswer) {
      const timer = setInterval(() => {
        goToNextQuestion();
      }, 60000); 
      return () => clearInterval(timer);
    }
  }, [currentIndex, userAnswer, quizData]); 

  const goToNextQuestion = () => {
    setUserAnswer(null); 
    setCurrentIndex(prevIndex => (prevIndex + 1) % quizData.length);
  };

  const handleAnswer = (option) => {
    setUserAnswer(option); 
    setTimeout(() => {
      goToNextQuestion();
    }, 3000);
  };

  if (isLoading) {
    return <p className="text-center p-8 font-press-start">Loading Quiz...</p>;
  }
  
  return (
    <div className="p-4">
      <QuestionQuiz 
        questionData={quizData[currentIndex]} 
        handleAnswer={handleAnswer}
        userAnswer={userAnswer}
      />
    </div>
  );
};

export default QuizSlider;