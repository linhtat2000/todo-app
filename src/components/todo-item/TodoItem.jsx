import React from "react";

import cross from "../../images/icon-cross.svg";
import check from "../../images/icon-check.svg";
import "./todoItem.css";

const TodoItem = ({ todo, handleCheck }) => {
  const handleClick = (e) => {
    e.preventDefault();
    handleCheck(e.currentTarget.nextElementSibling.id);
  };

  return (
    <div className="todo-item">
      <div className="border-gradient-wrapper" onClick={handleClick}>
        <img src={check} alt="check icon to add todo" className="check-icon" />
      </div>
      <li className={todo.complete ? "todo completed" : "todo"} id={todo.id}>
        {todo.task}
      </li>

      {/* <img src={cross} alt="Delete the item icon" className="delete-icon" /> */}
    </div>
  );
};

export default TodoItem;
