import { useState } from 'react';
import GameCard from "../GameCard/GameCard";
import StarRating from "./StarRating"; 

const WeekGame = ({ name, date, img }) => {
  const [gameRating, setGameRating] = useState(0);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center nes-container is-centered bg-gray-800 p-4 m-4">
      <div className='flex flex-col'>
      <p className="title font-press-start bg-white">Game of The Week</p>

      <div className="m-5">
        <GameCard
          name={name}
          img={img}
        />
      </div>
      </div>
      <div className="flex flex-col items-center m-5 text-white">
        <h2 className="font-press-start mb-2">Your Review</h2>
        
        <StarRating 
          rating={gameRating} 
          onRatingChange={setGameRating} 
        />
        
        <p className="mt-2 font-press-start">
          Grade: {gameRating}
        </p>
      </div>
    </div>
  );
};

export default WeekGame;