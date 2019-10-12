import {
  GET_USERS,
  GET_USERS_LOADING,
  GET_USERS_ERROR,
  GET_CURRENT_USER,
  GET_CURRENT_USER_LOADING,
  GET_CURRENT_USER_ERROR
} from './userTypes';

import { setAlert } from '../alert/alertActions';

export const getUsers = () => async dispatch => {
  try {
    dispatch({
      type: GET_USERS_LOADING
    });
    const res = await fetch(`${process.env.REACT_APP_SERVER_API_ROUTE}/users`);
    const data = await res.json();

    dispatch({
      type: GET_USERS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: GET_USERS_ERROR,
      payload: err.message
    });
    dispatch(setAlert('Unable to fetch all user data', 'danger'));
  }
};

// Get current user
export const getCurrentUser = userId => async dispatch => {
  try {
    dispatch({
      type: GET_CURRENT_USER_LOADING
    });
    const res = await fetch(
      `${process.env.REACT_APP_SERVER_API_ROUTE}/users/${userId}`
    );
    const data = await res.json();
    dispatch({
      type: GET_CURRENT_USER,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: GET_CURRENT_USER_ERROR,
      payload: err.message
    });
    dispatch(setAlert('Unable to fetch user', 'danger'));
  }
};
