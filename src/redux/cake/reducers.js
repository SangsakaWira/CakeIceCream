import { BUY_CAKE, SELL_CAKE } from "./actionTypes";

let initialState = {
  numOfCakes: 0
};

export const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.numBuying
      };
    case SELL_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.numSelling
      };
    default:
      console.log({ ...state });
      return { numOfCakes: state.numOfCakes };
  }
};
