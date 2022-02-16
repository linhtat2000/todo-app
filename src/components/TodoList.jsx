import TodoItem from "./todo-item/TodoItem";

const TodoList = ({ todoList, handleCheck, handleDelete }) => {
  return (
    <ul>
      {todoList.map((item, index) => {
        return (
          <TodoItem
            key={item.id}
            index={index}
            todo={item}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
