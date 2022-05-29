import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { userReducer } from './users.reducer';
import { alert } from './alert.reducer';
import { roomReducer } from './rooms.reducer';
const rootReducer = combineReducers({
  authentication,
  registration,
  userReducer,
  alert,
  roomReducer
});

export default rootReducer;