import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../action/productSlicer";
import categoryReducer from "../action/categorySlicer";
import counterReducer from "../action/counterSlicer";
const store = configureStore({
  reducer: {
    product: productReducer,
    category: categoryReducer,
    counter: counterReducer,
  },
});

export default store;
