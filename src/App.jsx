import React, { useState } from "react";

import moon from "./images/icon-moon.svg";
import sun from "./images/icon-sun.svg";
import check from "./images/icon-check.svg";
import TodoItem from "./components/todo-item/TodoItem";
import data from "./data.json";

import "./app.css";
import TodoList from "./components/TodoList";

const App = () => {
  let todoList = [];
  const [todo, setTodo] = useState(data);

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      addTodo(e.target.value);
    }
  };

  const addTodo = (item) => {
    todoList.push(item);
    console.log("entered", todoList);
    setTodo("");
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <div className="app">
      <div className="hero">
        <h1 className="heading">todo</h1>
        <img
          src={moon}
          alt="Moon icon, Click to enable dark theme"
          className="theme-toggle"
        />
      </div>

      <main className="container">
        <div className="input-field">
          {/* <button type="submit"> */}
          <img
            src={check}
            alt="check icon to add todo"
            className="check-icon input-icon"
          />
          {/* </button> */}
          <input
            type="text"
            name="text"
            className="input"
            placeholder="Create a new todo ..."
            onChange={handleChange}
            onKeyPress={handleEnter}
          />
        </div>
        <div className="wrapper">
          <div className="todo-list">
            <TodoList todoList={todo} />
          </div>
          <div className="info">
            <div className="items-left">5 items left</div>
            <div className="filter">
              <p className="active">All</p>
              <p>Active</p>
              <p>Completed</p>
            </div>
            <div className="clear">Clear Completed</div>
          </div>
        </div>
      </main>

      <footer className="footer">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
          class="attribution"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="htpps://www.xiaoling2000.com"
          target="_blank"
          rel="noreferrer"
          class="attribution"
        >
          Linh Tat
        </a>
        .
      </footer>
    </div>
  );
};

export default App;
