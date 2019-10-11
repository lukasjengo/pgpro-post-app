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

const initialState = {
  posts: {
    data: [],
    loading: false,
    isUpdating: false,
    error: null
  },
  currentPost: {
    data: null,
    loading: false,
    error: null
  },
  comments: {
    data: [],
    loading: false,
    isUpdating: false,
    error: null
  }
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    // GET ALL USER POSTS
    case GET_USER_POSTS:
      return {
        ...state,
        posts: { ...state.posts, data: payload, loading: false }
      };
    case GET_USER_POSTS_ERROR:
    case ADD_POST_ERROR:
    case DELETE_POST_ERROR:
      return {
        ...state,
        posts: {
          ...state.posts,
          error: payload,
          loading: false,
          isUpdating: false
        }
      };
    case GET_USER_POSTS_LOADING:
      return {
        ...state,
        posts: { ...state.posts, loading: true }
      };
    // GET CURRENT POST
    case GET_CURRENT_POST:
      return {
        ...state,
        currentPost: { ...state.currentPost, data: payload, loading: false }
      };
    case GET_CURRENT_POST_ERROR:
      return {
        ...state,
        currentPost: { ...state.currentPost, error: payload, loading: false }
      };
    case GET_CURRENT_POST_LOADING:
      return {
        ...state,
        currentPost: { ...state.currentPost, loading: true }
      };
    // GET CURRENT POST COMMENTS
    case GET_POST_COMMENTS:
      return {
        ...state,
        comments: { ...state.comments, data: payload, loading: false }
      };
    case GET_POST_COMMENTS_ERROR:
    case ADD_COMMENT_ERROR:
      return {
        ...state,
        comments: {
          ...state.comments,
          error: payload,
          loading: false,
          isUpdating: false
        }
      };
    case GET_POST_COMMENTS_LOADING:
      return {
        ...state,
        comments: { ...state.comments, loading: true }
      };
    // ADD AND DELETE POST
    case ADD_POST:
      return {
        ...state,
        posts: {
          ...state.posts,
          data: [payload, ...state.posts.data],
          isUpdating: false
        }
      };
    case DELETE_POST:
      return {
        ...state,
        posts: {
          ...state.posts,
          data: state.posts.data.filter(post => payload !== post.id),
          isUpdating: false
        }
      };
    case ADD_POST_LOADING:
    case DELETE_POST_LOADING:
      return {
        ...state,
        posts: {
          ...state.posts,
          isUpdating: true
        }
      };
    // ADD COMMENT
    case ADD_COMMENT:
      return {
        ...state,
        comments: {
          ...state.comments,
          data: [payload, ...state.comments.data],
          isUpdating: false
        }
      };
    case ADD_COMMENT_LOADING:
      return {
        ...state,
        comments: { ...state.comments, isUpdating: true }
      };
    default:
      return state;
  }
};
