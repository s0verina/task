import { combineReducers } from 'redux';

import userReducer, { USER_RN } from './user';

const rootReducer = combineReducers({
  [USER_RN]: userReducer,
});

export default rootReducer;