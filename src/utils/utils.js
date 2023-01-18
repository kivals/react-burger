import axios from "axios";
import {BUN_INGREDIENT} from "./consts";

export const getDataFromApi = async (url) => {
  try {
    const { data } = await axios.get(url);
    if (data && data.success) {
      return data;
    }
    new Error("Ошибка выполнения запроса");
  } catch (error) {
    throw error;
  }
};

export const postData = async (url, body) => {
  try {
    const { data } = await axios.post(url, body);
    if (data && data.success) {
      return data;
    }
    new Error("Ошибка выполнения запроса");
  } catch (e) {
    console.error(e);
  }
}


export const generateMockConstructorData = (apiData) => {
  if (!apiData || apiData.length === 0) {
    return [];
  }

  const buns = apiData.filter( ing => ing.type === BUN_INGREDIENT);
  const ingredients = apiData.filter(ing => ing.type !== BUN_INGREDIENT);


  const getRandom = (max) => {
    return Math.floor(Math.random() * max);
  }

  return [buns[getRandom(buns.length)], ...ingredients.splice(0, getRandom(ingredients.length))];
}

