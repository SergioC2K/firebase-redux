import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {authReducer} from './reducers/authReduce';
import {product_reducer} from './reducers/productReduce';
import {composeWithDevTools} from 'remote-redux-devtools';

const composeEnhancers = composeWithDevTools({
  realtime: true,
  port: 8000,
  hostname: '192.168.1.63',
});

const Root_Reducers = combineReducers({
  authReducer: authReducer,
  product_reducer: product_reducer,
});

const ConfigureStore = () => {
  return createStore(Root_Reducers, composeEnhancers(applyMiddleware(thunk)));
};

export default ConfigureStore;
