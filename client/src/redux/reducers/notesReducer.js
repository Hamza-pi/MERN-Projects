import * as actionTypes from "../actions/constants";
export const notesReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.GET_NOTES:
      return action.payload;
    case actionTypes.ADD_NOTE:
      return [...state, action.payload];
    case actionTypes.DELETE_NOTE:
      return state.filter((note) => note._id !== action.payload._id);
    case actionTypes.UPDATE_NOTE:
      return state.map((note) => {
        if (note._id === action.payload._id) {
          return action.payload;
        } else {
          return note;
        }
      });
    default:
      return state;
  }
};
