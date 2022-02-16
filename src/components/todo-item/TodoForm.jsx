import { useState } from "react";

import check from "../../images/icon-check.svg";

import "./todoForm.css";

const TodoForm = ({ addTask }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-field">
        <img
          src={check}
          alt="check icon to add todo"
          className="check-icon input-icon"
          onClick={handleSubmit}
        />
        <input
          type="text"
          value={input}
          placeholder="What do you want to accomplished today?"
          onChange={handleChange}
          className="input"
        />
      </div>
    </form>
  );
};

export default TodoForm;
