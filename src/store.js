import {createStore,applyMiddleware, combineReducers} from 'redux';
import loginReducer from './reducers/loginReducer';
import authorReducer from './reducers/authorReducer'
import thunk from 'redux-thunk';
const reducersCombined = combineReducers({
    login : loginReducer,
    author : authorReducer
});
const store = createStore(reducersCombined, applyMiddleware(thunk));
export default store;