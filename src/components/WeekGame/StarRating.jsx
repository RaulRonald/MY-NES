import { useState } from 'react';

const StarRating = ({ rating = 0, onRatingChange }) => {
  const [hoverRating, setHoverRating] = useState(0);
  const handleClick = (index, event) => {
    const starWidth = event.target.offsetWidth;
    const clickPosition = event.nativeEvent.offsetX;
    const newRating = clickPosition < starWidth / 2 ? index - 0.5 : index;
    onRatingChange(newRating);
  };

  return (
    <div className="flex items-center">
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
            onMouseEnter={() => setHoverRating(starValue)}
            onMouseLeave={() => setHoverRating(0)}
            style={{ cursor: 'pointer' }}
          />
        );
      })}
    </div>
  );
};

export default StarRating;