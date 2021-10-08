import {combineReducers} from 'redux';
import core from './core';
import user from './user';
import phones from './phones';

export default combineReducers({
    core,
    user,
    phones
});
