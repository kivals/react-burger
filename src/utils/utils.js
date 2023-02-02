import {BUN_INGREDIENT} from "./consts";

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

export const calcTotalPrice = (bun, ingredients) => {
  const bunPrice = bun?.price || 0;
  const ingredientPrice = ingredients?.reduce((sum, cur) => sum + cur.price, 0) || 0;
  return ingredientPrice + bunPrice * 2;
}

export const getTimeStamp = () => new Date().getTime();