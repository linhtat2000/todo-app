import TodoItem from "./todo-item/TodoItem";

const TodoList = ({ todoList, handleCheck }) => {
  return (
    <ul>
      {todoList.map((item) => {
        return <TodoItem key={item.id} todo={item} handleCheck={handleCheck} />;
      })}
    </ul>
  );
};

export default TodoList;
