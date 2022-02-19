import { combineReducers } from "redux";
import todo from "./todo/todo-reducers";
import filter from "./filter/filter-reducers";

export default combineReducers({ todo, filter });
