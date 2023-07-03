import { find } from "../../../../../utils/array";
import { replaceFrenchCommaWithDot } from "../../../../../utils/maths";

export const calculateSumToPay = (basket, menu) => {
  return basket.reduce((total, basketProduct) => {
    const menuProduct = find(basketProduct.id, menu);
    const price = replaceFrenchCommaWithDot(menuProduct.price);

    if (isNaN(price)) return total;
    total += price * basketProduct.quantity;
    return total;
  }, 0);
};
