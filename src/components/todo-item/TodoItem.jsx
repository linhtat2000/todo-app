import React from "react";

import cross from "../../images/icon-cross.svg";
import check from "../../images/icon-check.svg";
import "./todoItem.css";

const TodoItem = ({ todo, index, handleCheck, handleDelete }) => {
  const handleClick = () => {
    handleCheck(todo.id);
  };

  const deleteTask = (index) => {
    handleDelete(index);
  };

  return (
    <div className="todo-item">
      <div className="border-gradient-wrapper" onClick={handleClick}>
        <img
          src={check}
          alt="check icon to add todo"
          className={todo.complete ? "check-icon completed" : "check-icon"}
        />
      </div>
      <li className={todo.complete ? "todo completed" : "todo"} id={todo.id}>
        {todo.task}
      </li>

      <img
        src={cross}
        alt="Delete the item icon"
        className="delete-icon"
        onClick={() => deleteTask(index)}
      />
    </div>
  );
};

export default TodoItem;
