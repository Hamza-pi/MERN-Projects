import * as actionTypes from "./constants";
import axios from "axios";
const URL = "http://localhost:5000";
export const getAllNotes = () => async (dispatch) => {
  const response = await axios.get(URL);
  dispatch({ type: actionTypes.GET_NOTES, payload: response.data });
};
export const searchNote = (title) => async (dispatch) => {
  const response = await axios.post(`${URL}/search`, { title });
  dispatch({ type: actionTypes.SEARCH_NOTE, payload: response.data });
};
export const addNote = (title, data) => async (dispatch) => {
  const response = await axios.post(URL, { title, data });
  dispatch({ type: actionTypes.ADD_NOTE, payload: response.data });
};
export const deleteNote = (id) => async (dispatch) => {
  const response = await axios.delete(`${URL}/${id}`);
  dispatch({ type: actionTypes.DELETE_NOTE, payload: response.data });
};
export const updateNote = (id, title, data) => async (dispatch) => {
  const response = await axios.put(`${URL}/${id}`, { title, data });
  dispatch({ type: actionTypes.UPDATE_NOTE, payload: response.data });
};
