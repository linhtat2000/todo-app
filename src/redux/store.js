import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./root-reducer";
import todo from "./todo/todo-reducers";

const composedEnhancers = composeWithDevTools;

const store = createStore(todo, composedEnhancers);
export default store;
