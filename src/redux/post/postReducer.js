import {
  GET_USER_POSTS,
  GET_CURRENT_POST,
  GET_POST_COMMENTS,
  POST_ERROR,
  POST_LOADING,
  COMMENT_LOADING
} from './postTypes';

const initialState = {
  posts: [],
  currentPost: null,
  comments: [],
  postLoading: false,
  commentLoading: false,
  error: {}
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_USER_POSTS:
      return {
        ...state,
        posts: payload,
        postLoading: false
      };
    case GET_CURRENT_POST:
      return {
        ...state,
        currentPost: payload,
        comments: [],
        postLoading: false
      };
    case GET_POST_COMMENTS:
      return {
        ...state,
        comments: payload,
        commentLoading: false
      };
    case POST_ERROR:
      return {
        ...state,
        error: payload,
        postLoading: false,
        commentLoading: false
      };
    case POST_LOADING:
      return {
        ...state,
        postLoading: true
      };
    case COMMENT_LOADING:
      return {
        ...state,
        commentLoading: true
      };
    default:
      return state;
  }
};
