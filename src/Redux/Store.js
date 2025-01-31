import {createStore, applyMiddleware,compose} from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './Reducers';

const composeEnhancers =
  (process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : null) || compose;
    
const Store = createStore(rootReducer, composeEnhancers(applyMiddleware(ReduxThunk)));

export default Store;