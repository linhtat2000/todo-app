import { ADD_TASK, DELETE_TASK, TOGGLE_TASK, SET_FILTER } from "./todo-types";
import data from "../../data.json";

const INITIAL_STATE = [
  { id: 1, name: "Learn Yoga", complete: false, priority: "Medium" },
  { id: 2, name: "Learn Redux", complete: true, priority: "High" },
  { id: 3, name: "Learn JavaScript", complete: false, priority: "Low" },
];

const todo = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TASK: {
      return [...state, action.payload];
    }

    case DELETE_TASK: {
      const { index } = action.payload;
      return {
        ...state,
        todoList: [...state.todoList, state.todoList.splice(index, 1)],
      };
    }

    case TOGGLE_TASK: {
      const { id } = action.payload;
      return {
        ...state,
        todoList: [
          state.todoList.map((task) => {
            return task.id === Number(id)
              ? { ...task, complete: !task.complete }
              : { ...task };
          }),
        ],
      };
    }

    default:
      return state;
  }
};

export default todo;
