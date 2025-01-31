import { combineReducers } from 'redux';
import userReducer from '../Screens/Home/Reducer'

const appReducer = combineReducers({
  userReducer : userReducer,
  });
  
  const rootReducer = (state: any, action: any) => {
    return appReducer(state, action);
  };

export default rootReducer;