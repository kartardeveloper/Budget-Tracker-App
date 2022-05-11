import { legacy_createStore as createStore } from "redux";
import { rootReducer } from "./Components/Reducers/Reducers";

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
