import { GET_USER_POSTS, GET_COMMENTS, POST_ERROR } from './postTypes';

import { setAlert } from '../alert/alertActions';

export const getUserPosts = id => async dispatch => {
  try {
    const res = await fetch(`/users/${id}/posts?_start=0&_end=10`);
    const data = await res.json();
    dispatch({
      type: GET_USER_POSTS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: err.message
    });
    dispatch(setAlert('Unable to fetch user posts', 'danger'));
  }
};
