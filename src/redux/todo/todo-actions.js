import { ADD_TASK, DELETE_TASK, TOGGLE_TASK, SET_FILTER } from "./todo-types";

export const addTask = (task) => {
  return {
    type: ADD_TASK,
    payload: task,
  };
};

export const deleteTask = (task) => ({
  type: DELETE_TASK,
  payload: task,
});

export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: id,
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter,
});
