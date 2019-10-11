import {
  GET_USERS,
  GET_USERS_LOADING,
  GET_USERS_ERROR,
  GET_CURRENT_USER,
  GET_CURRENT_USER_LOADING,
  GET_CURRENT_USER_ERROR
} from './userTypes';

const initialState = {
  users: {
    data: [],
    loading: false,
    error: null
  },
  currentUser: {
    data: null,
    loading: false,
    error: null
  }
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_USERS:
      return {
        ...state,
        users: { ...state.users, data: payload, loading: false }
      };
    case GET_USERS_ERROR:
      return {
        ...state,
        users: { ...state.users, error: payload, loading: false }
      };
    case GET_USERS_LOADING:
      return {
        ...state,
        users: { ...state.users, loading: true }
      };
    case GET_CURRENT_USER:
      return {
        ...state,
        currentUser: { ...state.currentUser, data: payload, loading: false }
      };
    case GET_CURRENT_USER_ERROR:
      return {
        ...state,
        currentUser: { ...state.currentUser, error: payload, loading: false }
      };
    case GET_CURRENT_USER_LOADING:
      return {
        ...state,
        currentUser: { ...state.currentUser, loading: true }
      };
    default:
      return state;
  }
};
