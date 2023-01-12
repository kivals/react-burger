import React, {useEffect} from 'react';
import axios from 'axios';
import BurgerIngredients from "../Ingredients/BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../Constructor/BurgerConstructor/BurgerConstructor";
import mainStyles from './Main.module.css';

const API_URL = 'https://norma.nomoreparties.space/api/ingredients ';

const AppMain = () => {
    const [apiData, setApiData] = React.useState([]);
    const [isError, setIsError] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);

    useEffect( () => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);
            try {
                const result = await axios(API_URL);
                setApiData(result.data.data);
            } catch (error) {
                setIsError(true);
            }
            setIsLoading(false);
        };

        fetchData();
    }, []);

    return (
        <main className={`${mainStyles.main} container`}>
            {isError && <div>УПС что-то пошло не так...</div>}

            {isLoading && (<div>Загрузка ...</div>)}

            {!isLoading && !isError && (
                <>
                    <section className='pt-10'>
                        <BurgerIngredients data={apiData} />
                    </section>
                    <section className='pt-25'>
                        <BurgerConstructor data={apiData}/>
                    </section>
                </>
            )}
        </main>
    );
};

export default AppMain;