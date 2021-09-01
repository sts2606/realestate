import { combineReducers } from 'redux';
import app from './app.reducer';
import user from './user.reducer';

const rootReducer = combineReducers({
  app,
  user,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
