import { useState, useEffect, useRef } from "react"; 
import Slider from "../Slider/Slider";
import WeekGame from "../WeekGame/WeekGame";
import QuizSlider from "../Slider/QuizSlider";
import Star from "../Star/Star"; 
import StarCounter from "../Star/StarCounter";

function getWeekNumber() {
  const today = new Date();
  const startOfYear = new Date(today.getFullYear(), 0, 1);
  const daysPassed = (today - startOfYear) / (24 * 60 * 60 * 1000);
  return Math.ceil(daysPassed / 7);
}

function getGameOfTheWeek(gamesList) {
  if (!gamesList || gamesList.length === 0) {
    return null;
  }
  const weekNumber = getWeekNumber();
  const listSize = gamesList.length;
  const gameIndex = (weekNumber - 1) % listSize;
  return gamesList[gameIndex];
}

const Content = () => {
  const [gamesInfos, setGamesInfos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [starCount, setStarCount] = useState(0);
  const [isStarVisible, setIsStarVisible] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}entities.json`)
      .then((response) => response.json())
      .then((data) => {
        setGamesInfos(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar os jogos:", error);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    const showStar = () => setIsStarVisible(true);
    const hideStar = () => setIsStarVisible(false);

    const interval = setInterval(() => {
      showStar();
      setTimeout(hideStar, 20000); 
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  
  const handleStarClick = () => {
    setStarCount(currentCount => currentCount + 1);
    setIsStarVisible(false);
  };
  
  const featuredGame = getGameOfTheWeek(gamesInfos);

  if (isLoading) {
    return <p className="text-center p-8 font-press-start">Carregando jogos...</p>;
  }

  return (
    <div ref={contentRef} className="relative flex flex-col mr-1 ml-1 mt-2 rounded-2xl border-4 border-gray-400 bg-white overflow-hidden">
      <StarCounter count={starCount} />
      {isStarVisible && <Star onClick={handleStarClick} />}
      <div className="flex lg:flex-row flex-col justify-center">
        <Slider gamesInfos={gamesInfos} />
        {featuredGame && (
          <WeekGame
            name={featuredGame.name}
            img={featuredGame.link}
          />
        )}
      </div>
      <QuizSlider />
    </div>
  );
};

export default Content;