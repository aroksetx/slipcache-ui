import {createReducer} from 'typesafe-actions';


const initialAppState = {
    auth: false
}


const coreReducer = createReducer(initialAppState)

export default coreReducer;
export type CoreState = ReturnType<typeof coreReducer>;
