import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addTask } from "./redux/todo/todo-actions";
import { selectTodoList } from "./redux/todo/todo-selectors";

import data from "./data.json";
import moon from "./images/icon-moon.svg";
import sun from "./images/icon-sun.svg";

import TodoList from "./components/TodoList";
import TodoForm from "./components/todo-form/TodoForm";

import "./app.css";

const App = () => {
  // const [todoList, setTodoList] = useState(data);
  const [filter, setFilter] = useState("all");
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const todoList = useSelector((state) => state.todoList);

  const handleChange = (e) => {
    setInput(e.currentTarget.value);
  };

  console.log(todoList);

  // const handleCheck = (id) => {
  //   let mapped = todoList.map((task) => {
  //     return task.id === Number(id)
  //       ? { ...task, complete: !task.complete }
  //       : { ...task };
  //   });
  //   setTodoList(mapped);
  // };

  // const addTask = (task) => {
  //   let newList = [...todoList];
  //   newList = [
  //     ...newList,
  //     {
  //       id: todoList.length + 1,
  //       task,
  //       complete: false,
  //     },
  //   ];
  //   setTodoList(newList);
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input !== "") {
      dispatch(
        addTask({
          id: todoList.length + 1,
          task: input,
          complete: false,
        })
      );
      setInput("");
    }
  };

  // const deleteTask = (index) => {
  //   let newList = [...todoList];
  //   newList.splice(index, 1);
  //   setTodoList([...newList]);
  // };

  // const handleClearCompletedTask = () => {
  //   let filtered = todoList.filter((task) => {
  //     return !task.complete;
  //   });
  //   setTodoList(filtered);
  // };

  // const handleFilter = (status) => {
  //   switch (status) {
  //     case "active":
  //       setFilter("active");
  //       console.log(`I'm still struggling with this function *cry*`);
  //       return todoList.filter((task) => !task.complete);
  //     case "completed":
  //       setFilter("completed");
  //       console.log(`I'm still struggling with this function *cry*`);
  //       return todoList.filter((task) => task.complete);
  //     default:
  //       setFilter("all");
  //       console.log(`I'm still struggling with this function *cry*`);
  //       return todoList;
  //   }
  // };

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
        <TodoForm
          onSubmit={handleSubmit}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          input={input}
        />
        <div className="wrapper">
          <div className="todo-list">
            <TodoList
              // .filter(() => handleFilter(filter))
              todoList={todoList}
              // handleCheck={handleCheck}
              // handleDelete={deleteTask}
              // handleFilter={handleFilter}
              status={filter}
            />
          </div>
          {/* <div className="info">
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
          </div> */}
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
