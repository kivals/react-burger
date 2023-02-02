import React from 'react';
import styles from './IngredientDetails.module.css';

const IngredientDetails = ({details}) => {

  return (
    <>
      <img src={details.image_large} className={`${styles.image} mb-4`} alt={details.name} width="480" height="240" />
      <h2 className={`${styles.name} mb-8`}>{details.name}</h2>
      <div className={styles.nutritional}>
        <p className="mr-5">
          <span>Калории, ккал</span>
          <span>{details.calories}</span>
        </p>
        <p className="mr-5">
          <span>Белки, г</span>
          <span>{details.proteins}</span>
        </p>
        <p className="mr-5">
          <span>Жиры, г</span>
          <span>{details.fat}</span>
        </p>
        <p>
          <span>Углеводы, г</span>
          <span>{details.carbohydrates}</span>
        </p>
      </div>
    </>
  );
};

export default IngredientDetails;