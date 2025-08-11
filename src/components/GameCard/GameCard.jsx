const GameCard = ({ name, img }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src={img} alt={name} className="w-32 h-40" />
      <h2 className="text-center font-press-start mt-2 whitespace-pre-wrap">{name}</h2>
    </div>
  );
};

export default GameCard;
