import { createStore, bindActionCreators } from "redux";
import { reducer } from "./reducer";
import * as actions from "./actions";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Counter from "./counter";

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

const update = () => {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <Counter
        counter={store.getState()}
        inc={inc}
        dec={dec}
        random={() => {
          const value = Math.floor(Math.random() + 10);
          random(value);
        }}
      />
    </React.StrictMode>
  );
};
update();
store.subscribe(update);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<React.StrictMode></React.StrictMode>);
