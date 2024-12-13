import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./counter";
import privacyToggleSlice from "./privacy";
// const INITIAL_VALUE = {
//   counter: 0,
//   privacy: false,
// };

// const counterReducer = (store = INITIAL_VALUE, action) => {
//   if (action.type === "INCREMENT")
//     return { counter: store.counter + 1, privacy: store.privacy };
//   else if (action.type === "DECREMENT")
//     return { counter: store.counter - 1, privacy: store.privacy };
//   else if (action.type === "ADD")
//     return { counter: store.counter + action.payload, privacy: store.privacy };
//   else if (action.type === "DELETE")
//     return { counter: store.counter - action.payload, privacy: store.privacy };
//   else if (action.type === "PRIVACY_TOGGLE")
//     return { counter: store.counter, privacy: !store.privacy };
//   return store;
// };

const counterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    privacyToggle: privacyToggleSlice.reducer,
  },
});

export default counterStore;
