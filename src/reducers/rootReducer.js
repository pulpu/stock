import { combineReducers } from 'redux';
import simplyReducer from './simplyReducer';
import authReducers from './authAction';
export default combineReducers({
    simplyReducer: simplyReducer ,
    authReducers: authReducers
});