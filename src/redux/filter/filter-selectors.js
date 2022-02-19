// import { ALL, COMPLETED, INCOMPLETE } from "./filter-types";
// import { selectTodoList, selectTodoById } from "../todo/todo-selectors";

// export const selectTodos = (store) =>
//   selectTodoList(store).map((id) => selectTodoById(store, id));

// export const selectTodosByFilter = (store, filter) => {
//   const allTodos = selectTodos(store);
//   switch (filter) {
//     case COMPLETED:
//       return allTodos.filter((todo) => todo.completed);
//     case INCOMPLETE:
//       return allTodos.filter((todo) => !todo.completed);
//     case ALL:
//     default:
//       return allTodos;
//   }
// };
