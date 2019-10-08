import { GET_USERS, USER_ERROR } from './userTypes';

import { setAlert } from '../alert/alertActions';

// Get all users
export const getUsers = () => async dispatch => {
  try {
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
    dispatch(setAlert('Unable to fetch the data', 'danger'));
  }
};
