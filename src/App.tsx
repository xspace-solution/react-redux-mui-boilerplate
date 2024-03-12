import React from "react";
import "./App.css";
import { useAppSelector, useAppDispatch } from "./hooks";
import { decrement, increment } from "./store/appSlice";

function App() {
  const app = useAppSelector((store) => store.app);
  const dispatch = useAppDispatch();

  return (
    <div className="App">
      <span>{app.value}</span>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Minus
      </button>
    </div>
  );
}

export default App;
