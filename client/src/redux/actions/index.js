import axios from "axios";
import * as actionTypes from "./constants";
const API_URL = "http://localhost:5000";
export const addNewTodo = (data) => async (dispatch) => {
  try {
    const response = await axios.post(API_URL, {
      data: data,
    });
    dispatch({ type: actionTypes.ADD_NEW_TODO, payload: response.data });
  } catch (error) {
    console.log("Error While calling addNewTodo", error.message);
  }
};
export const getAllTodos = () => async (dispatch) => {
  try {
    const response = await axios.get(API_URL);
    dispatch({ type: actionTypes.GET_ALL_TODO, payload: response.data });
  } catch (error) {
    console.log("Error While calling getAllTodos", error.message);
  }
};
export const toggleTodo = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    dispatch({ type: actionTypes.TOGGLE_TODO, payload: response.data });
  } catch (error) {
    console.log("Error While calling getAllTodos", error.message);
  }
};
export const updateTodo = (id, data) => async (dispatch) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, { data });
    dispatch({ type: actionTypes.UPDATE_TODO, payload: response.data });
  } catch (error) {
    console.log("Error While calling getAllTodos", error.message);
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    dispatch({ type: actionTypes.DELETE_TODO, payload: response.data });
  } catch (error) {
    console.log("Error While calling getAllTodos", error.message);
  }
};
export const toggleTab = (tab) => async (dispatch) => {
  dispatch({ type: actionTypes.TOGGLE_TAB, selected: tab });
};
