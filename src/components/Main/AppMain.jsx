import React, {useEffect} from 'react';
import BurgerIngredients from "../Ingredients/BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../Constructor/BurgerConstructor/BurgerConstructor";
import mainStyles from './Main.module.css';
import { BASE_API_URL } from "../../utils/consts";
import { getDataFromApi } from "../../utils/utils";

const INGREDIENTS_API_URL = `${BASE_API_URL}ingredients`;

const AppMain = () => {
    const [apiData, setApiData] = React.useState([]);
    const [isError, setIsError] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);

    useEffect( () => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);
            try {
                const result = await getDataFromApi(INGREDIENTS_API_URL);
                setApiData(result.data);
            } catch (error) {
                setIsError(true);
                console.error(error);
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