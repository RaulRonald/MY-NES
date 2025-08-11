import { useState, useEffect } from "react"; 
import Slider from "../Slider/Slider";
import WeekGame from "../WeekGame/WeekGame";

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

  useEffect(() => {
    fetch('/entities.json') 
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

  const featuredGame = getGameOfTheWeek(gamesInfos);

  if (isLoading) {
    return <p className="text-center p-8 font-press-start">Carregando jogos...</p>;
  }

  return (
    <div className="flex flex-col mr-5 ml-5 mt-5 rounded-2xl border-4 border-gray-400 bg-white">
      <Slider gamesInfos={gamesInfos} />
      {featuredGame && (
        <WeekGame
          name={featuredGame.name}
          img={featuredGame.link}
        />
      )}
    </div>
  );
};

export default Content;