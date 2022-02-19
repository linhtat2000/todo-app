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
      {todoList && todoList.length
        ? todoList.map((item, index) => {
            return (
              <TodoItem
                key={item.id}
                index={index}
                todo={item}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
              />
            );
          })
        : "No todo, yay!"}
    </ul>
  );
};

export default TodoList;
