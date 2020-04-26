import { createStore } from "redux";
import myReducer from "./reducers";
import { status, sort } from "./actions";
const store = createStore(myReducer)

console.log(store.dispatch(sort({
  by: 'status',
  value: -1
})), 'store');