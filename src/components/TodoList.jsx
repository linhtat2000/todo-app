import TodoItem from "./todo-item/TodoItem";

const TodoList = ({
  todoList,
  handleCheck,
  handleDelete,
  handleFilter,
  status,
}) => {
  return (
    <ul>
      {todoList
        .filter(() => handleFilter(status))
        .map((item, index) => {
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
