import { combineReducers } from 'redux';

import userReducer from './user/userReducer';
import alertReducer from './alert/alertReducer';

const rootReducer = combineReducers({
  user: userReducer,
  alerts: alertReducer
});

export default rootReducer;
