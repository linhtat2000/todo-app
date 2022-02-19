import React, { useEffect, useState } from "react";

import moon from "./images/icon-moon.svg";
import sun from "./images/icon-sun.svg";
import data from "./data.json";
import TodoList from "./components/TodoList";
import TodoForm from "./components/todo-item/TodoForm";

import "./app.css";

const App = () => {
  const [todoList, setTodoList] = useState(data);
  const [filter, setFilter] = useState("all");

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

  const deleteTask = (index) => {
    let newList = [...todoList];
    newList.splice(index, 1);
    setTodoList([...newList]);
    todoList.length--;
  };

  const handleClearCompletedTask = () => {
    let filtered = todoList.filter((task) => {
      return !task.complete;
    });
    setTodoList(filtered);
  };

  const handleFilter = (status) => {
    switch (status) {
      case "active":
        setFilter("active");
        console.log(`I'm still struggling with this function *cry*`);
        return todoList.filter((task) => !task.complete);
      case "completed":
        setFilter("completed");
        console.log(`I'm still struggling with this function *cry*`);
        return todoList.filter((task) => task.complete);
      default:
        setFilter("all");
        console.log(`I'm still struggling with this function *cry*`);
        return todoList;
    }
  };

  return (
    <div className="app">
      <div className="hero">
        <div className="heading-wrapper">
          <h1 className="heading">todo</h1>
          <img
            src={moon}
            alt="Moon icon, Click to enable dark theme"
            className="theme-toggle"
          />
        </div>
      </div>

      <main className="container">
        <TodoForm addTask={addTask} />
        <div className="wrapper">
          <div className="todo-list">
            <TodoList
              // .filter(() => handleFilter(filter))
              todoList={todoList}
              handleCheck={handleCheck}
              handleDelete={deleteTask}
              handleFilter={handleFilter}
              status={filter}
            />
          </div>
          <div className="info">
            <div className="items-left">{todoList.length} items left</div>
            <div className="filter">
              <p
                className={filter === "all" ? "filtered" : null}
                onClick={() => handleFilter("all")}
              >
                All
              </p>
              <p
                className={filter === "active" ? "filtered" : null}
                onClick={() => handleFilter("active")}
              >
                Active
              </p>
              <p
                className={filter === "completed" ? "filtered" : null}
                onClick={() => handleFilter("completed")}
              >
                Completed
              </p>
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
          href="htpps://www.linhtat2000.netlify.app"
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
