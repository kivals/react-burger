import React from 'react';
import EmptyConstructorElement from "../BurgerConstructor/EmptyConstructorElement";
import {BUN_INGREDIENT, BUN_TOP} from "../../../utils/consts";
import styles from "../BurgerConstructor/BurgerConstructor.module.css";
import {ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import {ingredientPropTypes} from "../../../utils/props";

const ConstructorBunCard = ({bun, isHover, dragIngredientType, type}) => {
  const extraText = type === BUN_TOP ? '(верх)' : '(низ)';
  return (
    <>
      { !bun?._id ?
        <EmptyConstructorElement type={type} isHover={isHover && dragIngredientType === BUN_INGREDIENT}>
          Выберете булки
        </EmptyConstructorElement> :
        <div className={`${styles.bun} mb-4 pr-4`}>
          <ConstructorElement
            type={type}
            isLocked={true}
            text={`${bun.name} ${extraText}`}
            price={bun.price}
            thumbnail={bun.image_mobile}
          />
        </div>
      }
    </>
  );
};

ConstructorBunCard.propType = {
  bun: ingredientPropTypes,
  isHover: PropTypes.bool.isRequired,
  dragIngredientType: PropTypes.string,
  type: PropTypes.string,
}

export default ConstructorBunCard;