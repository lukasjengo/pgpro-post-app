import uuid from 'uuid';

import {
  GET_USER_POSTS,
  GET_USER_POSTS_ERROR,
  GET_USER_POSTS_LOADING,
  GET_CURRENT_POST,
  GET_CURRENT_POST_ERROR,
  GET_CURRENT_POST_LOADING,
  GET_POST_COMMENTS,
  GET_POST_COMMENTS_ERROR,
  GET_POST_COMMENTS_LOADING,
  ADD_POST,
  ADD_POST_ERROR,
  ADD_POST_LOADING,
  ADD_COMMENT,
  ADD_COMMENT_ERROR,
  ADD_COMMENT_LOADING,
  DELETE_POST,
  DELETE_POST_ERROR,
  DELETE_POST_LOADING
} from './postTypes';

import { setAlert } from '../alert/alertActions';
import { hideModal } from '../modal/modalActions';

export const getUserPosts = userId => async dispatch => {
  try {
    dispatch({
      type: GET_USER_POSTS_LOADING
    });
    const res = await fetch(
      `${process.env.REACT_APP_SERVER_API_ROUTE}/posts?userId=${userId}`
    );
    const data = await res.json();
    dispatch({
      type: GET_USER_POSTS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: GET_USER_POSTS_ERROR,
      payload: err.message
    });
    dispatch(setAlert('Unable to fetch user posts', 'danger'));
  }
};

export const getCurrentPost = (postId, userId) => async dispatch => {
  try {
    dispatch({
      type: GET_CURRENT_POST_LOADING
    });
    const res = await fetch(
      `${process.env.REACT_APP_SERVER_API_ROUTE}/users/${userId}/posts?id=${postId}`
    );
    const data = await res.json();
    dispatch({
      type: GET_CURRENT_POST,
      payload: data[0]
    });
  } catch (err) {
    dispatch({
      type: GET_CURRENT_POST_ERROR,
      payload: err.message
    });
    dispatch(setAlert('Unable to fetch current post', 'danger'));
  }
};

export const getPostComments = postId => async dispatch => {
  try {
    dispatch({
      type: GET_POST_COMMENTS_LOADING
    });
    const res = await fetch(
      `${process.env.REACT_APP_SERVER_API_ROUTE}/comments?postId=${postId}`
    );
    const data = await res.json();
    dispatch({
      type: GET_POST_COMMENTS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: GET_POST_COMMENTS_ERROR,
      payload: err.message
    });
    dispatch(setAlert('Unable to fetch comments', 'danger'));
  }
};

export const addPost = (formData, userId) => async dispatch => {
  try {
    dispatch({
      type: ADD_POST_LOADING
    });
    const res = await fetch(`${process.env.REACT_APP_SERVER_API_ROUTE}/posts`, {
      method: 'POST',
      body: JSON.stringify({ ...formData, userId }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    });
    const data = await res.json();
    data.id = uuid.v4();
    dispatch({
      type: ADD_POST,
      payload: data
    });
    dispatch(hideModal());
    dispatch(setAlert('Post successfully created', 'success'));
  } catch (err) {
    dispatch({
      type: ADD_POST_ERROR,
      payload: err.message
    });
    dispatch(setAlert('Unable to add post', 'danger'));
  }
};

export const deletePost = postId => async dispatch => {
  try {
    dispatch({
      type: DELETE_POST_LOADING
    });
    await fetch(`${process.env.REACT_APP_SERVER_API_ROUTE}/posts/${postId}`, {
      method: 'DELETE'
    });
    dispatch({
      type: DELETE_POST,
      payload: postId
    });
    dispatch(setAlert('Post successfully deleted', 'success'));
  } catch (err) {
    dispatch({
      type: DELETE_POST_ERROR,
      payload: err.message
    });
    dispatch(setAlert('Unable to delete post', 'danger'));
  }
};

export const addComment = (formData, postId) => async dispatch => {
  try {
    const id = uuid.v4();
    dispatch({
      type: ADD_COMMENT_LOADING
    });
    const res = await fetch(
      `${process.env.REACT_APP_SERVER_API_ROUTE}/posts/${postId}/comments`,
      {
        method: 'POST',
        body: JSON.stringify({ ...formData, id }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      }
    );
    const data = await res.json();
    data.id = id;
    dispatch({
      type: ADD_COMMENT,
      payload: data
    });
    dispatch(hideModal());
    dispatch(setAlert('Comment successfully created', 'success'));
  } catch (err) {
    dispatch({
      type: ADD_COMMENT_ERROR,
      payload: err.message
    });
    dispatch(setAlert('Unable to add comment', 'danger'));
  }
};
