import { TBunIngredient, TIngredient} from "./types";

export const calcTotalPrice = (bun: TBunIngredient | TIngredient | null, ingredients: TIngredient[]): number => {
  const bunPrice = bun?.price || 0;
  const ingredientPrice = ingredients?.reduce((sum, cur) => sum + cur.price, 0) || 0;
  return ingredientPrice + bunPrice * 2;
}

export const getTimeStamp = () => new Date().getTime();