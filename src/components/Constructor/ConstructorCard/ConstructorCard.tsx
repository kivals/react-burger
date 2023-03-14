import React, {FC, useEffect} from 'react';
import styles from "./ConstructorCard.module.css";
import AppIcon from "../../UI/AppIcon/AppIcon";
import {ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch} from "react-redux";
import {useDrag, useDrop} from "react-dnd";
import {TIngredient} from "../../../utils/types";
import {deleteIngredient2Constructor, sortIngredient2Constructor} from "../../../services/actions/burgerConstructor";

interface IConstructorCardProps {
  ingredient: TIngredient
}

const ConstructorCard: FC<IConstructorCardProps> = ({ingredient}) => {
  const dispatch = useDispatch();
  const [{isDrag}, dragRef] = useDrag({
    type: "constructor",
    item: ingredient,
    collect: monitor => ({
      isDrag: monitor.isDragging()
    })
  });

  const [{isHover, dragIngredient}, dropTarget] = useDrop({
    accept: "constructor",
    drop(dragIngredient: TIngredient) {
      if (dragIngredient.key === ingredient.key) return;
      dispatch(sortIngredient2Constructor([ingredient, dragIngredient]))
    },
    collect: monitor => ({
      isHover: monitor.isOver(),
      dragIngredient: monitor.getItem(),
    }),
  });

  useEffect(() => {
    if (isHover && ingredient.key !== dragIngredient.key) {
      dispatch(sortIngredient2Constructor([ingredient, dragIngredient]))
    }
  }, [isHover,dispatch, dragIngredient, ingredient])

  const handleDelete = (deletedKey: string) => (): void => {
    dispatch(deleteIngredient2Constructor(deletedKey))
  }

  return (
    <div ref={dropTarget}>
      <div draggable='true' className={`${isDrag && styles.hidden } ${styles.card}`} ref={dragRef}>
        <AppIcon icon='drag' type='primary'/>
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

export default ConstructorCard;