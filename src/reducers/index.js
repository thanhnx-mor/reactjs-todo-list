import { combineReducers } from "redux";
import statusReducer from "./status";
import sortReducer from "./sort";
import tasksReducer from "./tasks";
import taskEditing from "./taskEditing";
import filterTable from "./filterTable"

const myReducer = combineReducers({
  sortReducer,
  statusReducer,
  tasksReducer,
  taskEditing,
  filterTable
})
export default myReducer