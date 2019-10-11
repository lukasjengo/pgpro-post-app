import { combineReducers } from 'redux';

import userReducer from './user/userReducer';
import postReducer from './post/postReducer';
import modalReducer from './modal/modalReducer';
import alertReducer from './alert/alertReducer';

const rootReducer = combineReducers({
  user: userReducer,
  post: postReducer,
  modal: modalReducer,
  alerts: alertReducer
});

export default rootReducer;
