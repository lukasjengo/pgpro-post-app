import { combineReducers } from 'redux';

import userReducer from './user/userReducer';
import postReducer from './post/postReducer';
import alertReducer from './alert/alertReducer';

const rootReducer = combineReducers({
  user: userReducer,
  post: postReducer,
  alerts: alertReducer
});

export default rootReducer;
