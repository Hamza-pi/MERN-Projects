import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { notesReducer } from "./reducers/notesReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { searchReducer } from "./reducers/searchReducer";
const reducer = combineReducers({
  notes: notesReducer,
  searchItem: searchReducer,
});
const middleware = [thunk];
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
