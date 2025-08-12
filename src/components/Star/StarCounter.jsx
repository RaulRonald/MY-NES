const StarCounter = ({ count }) => {
  return (
    <div className="flex items-center justify-center p-2 gap-2">
      <i className="nes-icon is-small star"></i>
      <span className="font-press-start text-lg text-yellow-400">
        x{count}
      </span>
    </div>
  );
};

export default StarCounter;