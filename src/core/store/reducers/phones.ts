import {createReducer} from 'typesafe-actions';
import {App} from '../../../types';
import {loadUserPhones} from '../actions/phones';
import {Phone} from '../../../types/phones';


interface PhonesStoreState {
    phones: Phone[];
}

const initialAppState: PhonesStoreState = {
    phones: []
}



const phonesReducer = createReducer(initialAppState)

    .handleAction(loadUserPhones.request, (state) => ({...state}))
    .handleAction(loadUserPhones.success, (state, {payload, ...rest}) => {
        return {
            ...state,
            phones: payload as Phone []
        }
    })
    .handleAction(loadUserPhones.failure, (state) => ({...state}))

export default phonesReducer;
export type PhonesState = ReturnType<typeof phonesReducer>;
