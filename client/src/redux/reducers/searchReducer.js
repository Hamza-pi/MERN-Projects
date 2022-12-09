import * as actionTypes from "../actions/constants";
export const searchReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.SEARCH_NOTE:
      return action.payload;
    default:
      return state;
  }
};
