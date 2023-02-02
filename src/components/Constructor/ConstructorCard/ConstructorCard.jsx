import React, {useEffect} from 'react';
import styles from "./ConstructorCard.module.css";
import AppIcon from "../../UI/AppIcon/AppIcon";
import {iconColorTypes, iconTypes} from "../../../utils/icon-types";
import {ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import {
  DELETE_CONSTRUCTOR_INGREDIENT,
  SORT_CONSTRUCTOR_INGREDIENT
} from "../../../services/actions/burgerConstructor";
import {useDispatch} from "react-redux";
import {useDrag, useDrop} from "react-dnd";
import {ingredientPropTypes} from "../../../utils/props";

const ConstructorCard = ({ingredient}) => {
  const dispatch = useDispatch();
  const [{isDrag}, dragRef] = useDrag({
    type: "constructor",
    item: ingredient,
    collect: monitor => ({
      isDrag: monitor.isDragging()
    })
  });

  const [{isHover,dragIngredient}, dropTarget] = useDrop({
    accept: "constructor",
    drop(dragIngredient) {
      if (dragIngredient.key === ingredient.key) return;

      dispatch({
        type: SORT_CONSTRUCTOR_INGREDIENT,
        value: [ingredient, dragIngredient],
      })
    },
    collect: monitor => ({
      isHover: monitor.isOver(),
      dragIngredient: monitor.getItem(),
    }),
  });

  useEffect(() => {
    if (isHover && ingredient.key !== dragIngredient.key) {
      dispatch({
        type: SORT_CONSTRUCTOR_INGREDIENT,
        value: [ingredient, dragIngredient],
      })
    }
  }, [isHover,dispatch, dragIngredient, ingredient])

  const handleDelete = (deletedKey) => () => {
    dispatch({
      type: DELETE_CONSTRUCTOR_INGREDIENT,
      value: deletedKey,
    })
  }

  return (
    <div ref={dropTarget}>
      <div draggable='true' className={`${isDrag && styles.hidden } ${styles.card}`} ref={dragRef}>
        <AppIcon icon={iconTypes.DRAG} type={iconColorTypes.PRIMARY}/>
        <ConstructorElement
          isLocked={false}
          text={ingredient.name}
          price={ingredient.price}
          thumbnail={ingredient.image_mobile}
          handleClose={handleDelete(ingredient.key)}
        />
      </div>
    </div>

  );
};

ConstructorCard.propTypes = {
  ingredient: ingredientPropTypes.isRequired
}

export default ConstructorCard;