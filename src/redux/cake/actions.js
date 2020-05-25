import { BUY_CAKE, SELL_CAKE } from "./actionTypes";

export const buyCake = numBuying => {
  return {
    type: BUY_CAKE,
    numBuying: numBuying
  };
};

export const sellCake = numSelling => {
  return {
    type: SELL_CAKE,
    numSelling: numSelling
  };
};
