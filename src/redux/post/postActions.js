import {
  GET_USER_POSTS,
  GET_CURRENT_POST,
  GET_POST_COMMENTS,
  POST_ERROR,
  POST_LOADING,
  COMMENT_LOADING
} from './postTypes';

import { setAlert } from '../alert/alertActions';

const postLoading = () => {
  return {
    type: POST_LOADING
  };
};
const commentLoading = () => {
  return {
    type: COMMENT_LOADING
  };
};

export const getUserPosts = (
  id,
  paginate = '?_start=0&_end=10'
) => async dispatch => {
  try {
    dispatch(postLoading());
    const res = await fetch(`/users/${id}/posts${paginate}`);
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

export const getCurrentPost = (postId, userId) => async dispatch => {
  try {
    dispatch(postLoading());
    const res = await fetch(`/users/${userId}/posts?id=${postId}`);
    const data = await res.json();
    dispatch({
      type: GET_CURRENT_POST,
      payload: data[0]
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: err.message
    });
    dispatch(setAlert('Unable to fetch current post', 'danger'));
  }
};

export const getPostComments = (
  postId,
  paginate = '?_start=0&_end=10'
) => async dispatch => {
  try {
    dispatch(commentLoading());
    const res = await fetch(`/posts/${postId}/comments${paginate}`);
    const data = await res.json();
    dispatch({
      type: GET_POST_COMMENTS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: err.message
    });
    dispatch(setAlert('Unable to fetch comments', 'danger'));
  }
};
