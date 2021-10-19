import {combineReducers} from 'redux';
import core from './core';
import user from './user';

export default combineReducers({
    core,
    user
});
