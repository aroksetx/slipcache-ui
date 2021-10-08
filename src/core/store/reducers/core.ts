import {createReducer} from 'typesafe-actions';
import {hi} from '../actions/core';
import {App} from '../../../types';

const initialAppState = {
    auth: false
}


const coreReducer = createReducer(initialAppState)

export default coreReducer;
export type CoreState = ReturnType<typeof coreReducer>;
