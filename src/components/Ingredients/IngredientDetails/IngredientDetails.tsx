import React, {FC, useEffect, useMemo} from 'react';
import styles from './IngredientDetails.module.css';
import {useParams} from "react-router-dom";
import {getIngredients} from "../../../services/actions/ingredients";
import Loader from "../../UI/AppLoader/Loader";
import {useDispatch, useSelector} from "../../../services/hooks";

const IngredientDetails: FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { ingredients, isLoading, hasError } = useSelector((state) => state.ingredients);

  useEffect(() => {
    if (!ingredients.length) {
      dispatch(getIngredients());
    }
  }, [dispatch, ingredients]);

  const details = useMemo(() => {
    return ingredients.find(ing => ing._id === id);
  }, [ingredients, id]);

  if (isLoading) {
    return <Loader size='large' />
  }

  if (hasError) {
    return <h1>Что-то пошло не так</h1>
  }

  if (details) {
    return (
      <div>
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
      </div>
    )
  }
  return null;
};

export default IngredientDetails;