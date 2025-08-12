import { useState } from 'react';

const StarRating = ({ rating = 0, onRatingChange = () => {} }) => {
  const [hoverRating, setHoverRating] = useState(0);
  const getRatingFromMouseEvent = (index, event) => {
    const starWidth = event.target.offsetWidth;
    const clickPosition = event.nativeEvent.offsetX;
    return clickPosition < starWidth / 2 ? index - 0.5 : index;
  };

  const handleMouseMove = (index, event) => {
    setHoverRating(getRatingFromMouseEvent(index, event));
  };

  const handleMouseLeave = () => {
    setHoverRating(0); 
  };
  
  const handleClick = (index, event) => {
    const newRating = getRatingFromMouseEvent(index, event);
    onRatingChange(newRating);
    setHoverRating(newRating); 
  };

  return (
    <div className="flex items-center" onMouseLeave={handleMouseLeave}>
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        const displayRating = hoverRating || rating;
        
        let starClass = 'is-empty';
        if (starValue <= displayRating) {
          starClass = '';
        } else if (starValue === Math.ceil(displayRating) && !Number.isInteger(displayRating)) {
          starClass = 'is-half'; 
        }

        return (
          <i
            key={starValue}
            className={`nes-icon is-large star ${starClass}`}
            onClick={(e) => handleClick(starValue, e)}
            onMouseMove={(e) => handleMouseMove(starValue, e)}
            style={{ cursor: 'pointer' }}
          />
        );
      })}
    </div>
  );
};

export default StarRating;