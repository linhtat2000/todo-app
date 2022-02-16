import React, { useState } from "react";

import moon from "./images/icon-moon.svg";
import sun from "./images/icon-sun.svg";
import data from "./data.json";
import TodoList from "./components/TodoList";
import TodoForm from "./components/todo-item/TodoForm";

import "./app.css";

const App = () => {
  const [todoList, setTodoList] = useState(data);

  const handleCheck = (id) => {
    let mapped = todoList.map((task) => {
      return task.id === Number(id)
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setTodoList(mapped);
  };

  const addTask = (task) => {
    let newList = [...todoList];
    newList = [
      ...newList,
      {
        id: todoList.length + 1,
        task,
        complete: false,
      },
    ];
    setTodoList(newList);
  };

  const handleDelete = (index) => {
    let newList = [...todoList];
    newList.splice(index, 1);
    setTodoList([...newList]);
    todoList.length--;
    console.log(todoList, index);
  };

  const handleClearCompletedTask = () => {
    let filtered = todoList.filter((task) => {
      return !task.complete;
    });
    setTodoList(filtered);
  };

  return (
    <div className="app">
      <div className="hero">
        <h1 className="heading">todo app</h1>
        <img
          src={moon}
          alt="Moon icon, Click to enable dark theme"
          className="theme-toggle"
        />
      </div>

      <main className="container">
        <TodoForm addTask={addTask} />
        <div className="wrapper">
          <div className="todo-list">
            <TodoList
              todoList={todoList}
              handleCheck={handleCheck}
              handleDelete={handleDelete}
            />
          </div>
          <div className="info">
            <div className="items-left">{todoList.length} items left</div>
            <div className="filter">
              <p className="active">All</p>
              <p>Active</p>
              <p>Completed</p>
            </div>
            <div className="clear" onClick={handleClearCompletedTask}>
              Clear Completed
            </div>
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
