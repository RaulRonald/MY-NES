import { useState } from "react";
import GameCard from "../GameCard/GameCard";

const Slider = ({ gamesInfos }) => {
  const [index, setIndex] = useState(0);
  function changeCard(right) {
    if (right) {
      setIndex((prevIndex) => (prevIndex + 1) % gamesInfos.length);
    } else {
      setIndex(
        (prevIndex) => (prevIndex - 1 + gamesInfos.length) % gamesInfos.length
      );
    }
  }
  const prevIndex = (index - 1 + gamesInfos.length) % gamesInfos.length;
  const nextIndex = (index + 1) % gamesInfos.length;

  const currentGame = gamesInfos[index];
  const prevGame = gamesInfos[prevIndex];
  const nextGame = gamesInfos[nextIndex];

  return (
    <div className="nes-container flex flex-col gap-2 items-center justify-around bg-gray-400 p-4 m-4 " >
      <a className="p-2">
        <h1 className="text-red-500 font-bold text-4xl drop-shadow-[2px_2px_0px_#1f2937]">
          ENTITIES
        </h1>
      </a>
    <div className="flex items-center gap-10 justify-around ">
      <button
        type="button"
        onClick={() => changeCard(false)}
        className=" hover:bg-gray-700"
      >
        <i className="nes-icon"></i>
        <div className="flex opacity-50">
        <GameCard
          name={prevGame.name}
          date={prevGame.date}
          img={prevGame.link}
        />
      </div>
      </button>
      

      <div className="mx-5 flex">
        <GameCard
          name={currentGame.name}
          date={currentGame.date}
          img={currentGame.link}
        />
      </div>

      
      <button
        type="button"
        onClick={() => changeCard(true)}
        className=" hover:bg-gray-700"
      >
        <i className="nes-icon"></i>
        <div className="flex opacity-50">
        <GameCard
          name={nextGame.name}
          date={nextGame.date}
          img={nextGame.link}
        />
      </div>
      </button>
    </div>
    </div>
  );
};
export default Slider;
