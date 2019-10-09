import {
  GET_USERS,
  GET_CURRENT_USER,
  USER_ERROR,
  USER_LOADING
} from './userTypes';

const initialState = {
  users: [],
  currentUser: null,
  loading: false,
  error: {}
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_USERS:
      return {
        ...state,
        users: payload,
        loading: false
      };
    case GET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
        loading: false
      };
    case USER_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case USER_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
