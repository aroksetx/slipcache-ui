import {App} from '../../../types';
import {createReducer} from 'typesafe-actions';
import {loadUserBalance, loadUserInfo, logInUser} from '../actions/user';
import {UserProfile} from '../../../types/userAuthCredentials';

const initialAppState: App = {
    auth: false,
    profile: null,
    balance: null
}


const userReducer = createReducer(initialAppState)
    .handleAction(logInUser.request, (state) => ({...state}))
    .handleAction(logInUser.success, (state) => ({...state}))
    .handleAction(logInUser.failure, (state) => ({...state}))

    .handleAction(loadUserInfo.request, (state) => ({...state}))
    .handleAction(loadUserInfo.success, (state, {payload, ...rest}) => {
        return {
            ...state,
            profile: payload
        }
    })
    .handleAction(loadUserInfo.failure, (state) => ({...state}))


    .handleAction(loadUserBalance.request, (state) => ({...state}))
    .handleAction(loadUserBalance.success, (state, {payload, ...rest}) => ({ ...state, balance: payload.balance }))
    .handleAction(loadUserBalance.failure, (state) => ({...state}))

export default userReducer;
export type UserState = ReturnType<typeof userReducer>;
