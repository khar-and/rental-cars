import { configureStore } from "@reduxjs/toolkit";

// export const store = configureStore({
//   reducer: {},
// });

import catalogReducer from "./slice";

const store = configureStore({
  reducer: {
    catalog: catalogReducer,
  },
});

export default store;
