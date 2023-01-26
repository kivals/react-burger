import React from 'react';
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
  const [, dragRef] = useDrag({
    type: "constructor",
    item: ingredient,
  });

  const [, dropTarget] = useDrop({
    accept: "constructor",
    drop(dragIngredient) {
      if (dragIngredient.key === ingredient.key) return;

      dispatch({
        type: SORT_CONSTRUCTOR_INGREDIENT,
        value: [ingredient, dragIngredient],
      })
    },
  });

  const handleDelete = (deletedKey) => () => {
    dispatch({
      type: DELETE_CONSTRUCTOR_INGREDIENT,
      value: deletedKey,
    })
  }

  return (
    <div ref={dropTarget}>
      <div className={styles.card} ref={dragRef}>
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
  data: ingredientPropTypes
}

export default ConstructorCard;