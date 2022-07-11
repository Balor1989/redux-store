import { createStore, bindActionCreators } from "redux";
import { reducer } from "./reducer";
import * as actions from "./actions";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Counter from "./counter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>
);

const store = createStore(reducer);
const { dispatch } = store;

// const bindActionCreator =
//   (creator, dispatch) =>
//   (...args) => {
//     dispatch(creator(...args));
//   };

// const incDispatch = bindActionCreators(inc, dispatch);
// const decDispatch = bindActionCreators(dec, dispatch);
// const randomDispatch = bindActionCreators(random, dispatch);

const { inc, dec, random } = bindActionCreators(actions, dispatch);

document.querySelector(".inc").addEventListener("click", inc);

document.querySelector(".dec").addEventListener("click", dec);

document.querySelector(".random").addEventListener("click", () => {
  const payload = Math.floor(Math.random() * 10);
  random(payload);
});

const update = () => {
  document.querySelector(".counter").innerHTML = store.getState();
};

store.subscribe(update);
