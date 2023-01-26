import React, {useEffect} from 'react';
import BurgerIngredients from "../Ingredients/BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../Constructor/BurgerConstructor/BurgerConstructor";
import mainStyles from './Main.module.css';
import {useDispatch, useSelector} from "react-redux";
import {getIngredients} from "../../services/actions/ingredients";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import Loader from "../UI/AppLoader/Loader";

const AppMain = () => {

    const dispatch = useDispatch();

    const { ingredients, isLoading, hasError } = useSelector(state => state.ingredients);

    useEffect(
      () => {
          dispatch(getIngredients());
      },
      [dispatch]
    );

    return (
        <main className={`${mainStyles.main} container`}>
            {hasError && <div>УПС что-то пошло не так...</div>}

            {isLoading && (<Loader size="large"/>)}

            {!isLoading && !hasError && (
                <DndProvider backend={HTML5Backend}>
                    <section className='pt-10'>
                        <BurgerIngredients data={ingredients} />
                    </section>
                    <section className='pt-25'>
                        <BurgerConstructor />
                    </section>
                </DndProvider>
            )}
        </main>
    );
};

export default AppMain;