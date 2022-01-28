import React from "react";

import moon from "./images/icon-moon.svg";
import sun from "./images/icon-sun.svg";
import cross from "./images/icon-cross.svg";
import check from "./images/icon-check.svg";
import "./app.css";

const App = () => {
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
          <img
            src={check}
            alt="check icon to add todo"
            className="check-icon input-check"
          />
          <input
            type="text"
            className="input"
            placeholder="Create a new todo ..."
          />
        </div>
        <div className="wrapper">
          <div className="todo-list">
            {/* You don't have any items here! Create some by inputing from the
            field above ;) */}
            <div className="todo-item">
              <img
                src={check}
                alt="check icon to add todo"
                className="check-icon"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                a culpa necessitatibus! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Iure porro inventore perferendis.
              </p>

              {/* only display when hovering */}
              <img
                src={cross}
                alt="Delete the item icon"
                className="delete-icon"
              />
            </div>
            <div className="todo-item">Clean the room</div>
            <div className="todo-item">Reading 2 chapter</div>
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
