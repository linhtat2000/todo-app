import TodoItem from "./todo-item/TodoItem";

const TodoList = ({ todoList }) => {
  return (
    <ul>
      {todoList.map((item, index) => {
        return <TodoItem key={index} todo={item} />;
      })}
    </ul>
  );
};

export default TodoList;
