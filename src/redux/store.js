import { createStore, combineReducers } from "redux";
import iceCreamReducer from "./iceCream/reducers";
import { cakeReducer } from "./cake/reducers";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer
});
export const store = createStore(rootReducer);
