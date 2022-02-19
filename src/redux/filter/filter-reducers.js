import { ALL } from "./filter-types";
import { SET_FILTER } from "../todo/todo-types";

const INITIAL_STATE = ALL;

const filter = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_FILTER: {
      return action.payload.filter;
    }
    default: {
      return state;
    }
  }
};

export default filter;
