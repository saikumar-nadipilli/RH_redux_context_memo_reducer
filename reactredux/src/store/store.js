// import { createStore } from "redux";

// // Initial state of the counter
// const initialState = {
//   count: 0,
// };

// // Reducer function (takes state and action, returns new state)
// function counterReducer(state = initialState, action) {
//     console.log("store", initialState)
//   switch (action.type) {
//     case "INCREMENT":
//       return { count: state.count + 1 };
//     case "DECREMENT":
//       return { count: state.count - 1 };
//     default:
//       return state;
//   }
// }

// // Create Redux store
// const store = createStore(counterReducer);

// export default store;

import { configureStore } from "@reduxjs/toolkit";

// Initial state of the counter
const initialState = {
  count: 0,
};

// Reducer function (takes state and action, returns new state)
function counterReducer(state = initialState, action) {
  console.log("Current State:", state);
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }

  //   switch (action.type) {
  //     case "INCREMENT":
  //       return { count: state.count + 1 };
  //     case "DECREMENT":
  //       return { count: state.count - 1 };
  //     default:
  //       return state;
  //   }
}

// Create Redux store using configureStore
const store = configureStore({
  reducer: counterReducer,
});

export default store;
