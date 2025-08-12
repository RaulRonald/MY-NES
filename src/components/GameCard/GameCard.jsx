const GameCard = ({ name, img }) => {
  return (
    <div className="w-28 h-36 flex flex-col items-center justify-center bg-gray-900 border-white border-4">
      <img 
        src={img} 
        alt={name} 
        className="w-6/12 h-6/12" 
      />
      <h2 
        className="font-press-start text-white text-xs whitespace-pre-wrap"
      >
        {name}  
      </h2>
    </div>
  );
};

export default GameCard;
