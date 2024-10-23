import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../store/action";

function Counter() {
  // Access the Redux state using useSelector
  const count = useSelector((state) => state.count);

  // Get the dispatch function from Redux
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default Counter;
