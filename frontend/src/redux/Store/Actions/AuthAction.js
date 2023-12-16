
import axios from 'axios';
import * as types from '../Type/AuthType';
axios.defaults.baseURL = "http://localhost:8000"

export const signup = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: types.AUTH_REQUEST });
    const { data } = await axios.post('/auth/register', { name, email, password });
    console.log(data)
    dispatch({
      type: types.REGISTER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: types.AUTH_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};


export const signin = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: types.AUTH_REQUEST });
    const { data } = await axios.post('/auth/login', { email, password });

    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: data,
    });

    localStorage.setItem('token', data.user.token);

  } catch (error) {
    dispatch({
      type: types.AUTH_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};
export const logout = () => (dispatch) => {
  dispatch({ type: types.LOGOUT });
  localStorage.removeItem('token');
  localStorage.removeItem('userData');
};

export const getAllUsers = () => async (dispatch) => {
  try {
    dispatch({ type: 'GET_ALL_USERS_REQUEST' });

    const response = await axios.get('/auth');

    dispatch({
      type: 'GET_ALL_USERS_SUCCESS',
      payload: response.data.users,
    });
  } catch (error) {
    dispatch({
      type: 'GET_ALL_USERS_FAILURE',
      payload: error.response ? error.response.data.error : error.message,
    });
  }
};