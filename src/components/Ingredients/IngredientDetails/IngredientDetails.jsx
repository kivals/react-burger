import React from 'react';
import styles from './IngredientDetails.module.css';
import PropTypes from "prop-types";

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

IngredientDetails.propTypes = {
  details: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image_large: PropTypes.string.isRequired,
    calories: PropTypes.number.isRequired,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
  }.isRequired)
}

export default IngredientDetails;