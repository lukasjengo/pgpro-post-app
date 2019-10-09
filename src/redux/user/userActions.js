import {
  GET_USERS,
  GET_CURRENT_USER,
  USER_ERROR,
  USER_LOADING
} from './userTypes';

import { setAlert } from '../alert/alertActions';

const userLoading = () => {
  return {
    type: USER_LOADING
  };
};

// Get all users
export const getUsers = () => async dispatch => {
  try {
    dispatch(userLoading());
    const res = await fetch('/users');
    const data = await res.json();

    dispatch({
      type: GET_USERS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: err.message
    });
    dispatch(setAlert('Unable to fetch all user data', 'danger'));
  }
};

// Get current user
export const getCurrentUser = userId => async dispatch => {
  try {
    dispatch(userLoading());
    const res = await fetch(`/users/${userId}`);
    const data = await res.json();
    dispatch({
      type: GET_CURRENT_USER,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: err.message
    });
    dispatch(setAlert('Unable to fetch user', 'danger'));
  }
};
