import { BUY_ICECREAM, SELL_ICECREAM } from "./actionTypes";

const buyIceCream = () => {
  return {
    type: BUY_ICECREAM
  };
};
const sellIceCream = () => {
  return {
    type: SELL_ICECREAM
  };
};

export { buyIceCream, sellIceCream };
