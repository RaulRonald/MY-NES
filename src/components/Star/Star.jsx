import styles from './Star.module.css';

const Star = ({ onClick }) => {
    const starImageUrl = `${import.meta.env.BASE_URL}images/Super_Star.png`;
  return (
    
    <div className={styles.starContainer}>
      <button
        type="button"
        className={styles.starButton} 
        onClick={onClick}
        aria-label="Collect Star"
      >
        <img src={starImageUrl} alt="Super Star" className="w-12 h-12" />
      </button>
    </div>
  );
};

export default Star;