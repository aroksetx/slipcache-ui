import {App} from '../../../types';
import {createReducer} from 'typesafe-actions';
import {loadUserBalance, loadUserInfo, logInUser, signupUser} from '../actions/user';
import {UserProfile} from '../../../types/userAuthCredentials';

const initialAppState: App = {
    auth: false,
    profile: null
}


const userReducer = createReducer(initialAppState)
    .handleAction(logInUser.request, (state) => ({...state}))
    .handleAction(logInUser.success, (state, {payload, ...rest}) => ({
        ...state,
        auth: true,
        profile: payload
    }))
    .handleAction(logInUser.failure, (state) => ({...state}))

    .handleAction(loadUserInfo.request, (state) => ({...state}))
    .handleAction(loadUserInfo.success, (state, {payload, ...rest}) => {
        return {
            ...state,
            profile: payload
        }
    })
    .handleAction(loadUserInfo.failure, (state) => ({...state}))

    .handleAction(signupUser.request, (state) => ({...state}))
    .handleAction(signupUser.success, (state, {payload, ...rest}) =>  ({
        ...state,
        auth: true,
        profile: payload
    }))
    .handleAction(signupUser.failure, (state) => ({...state}))

export default userReducer;
export type UserState = ReturnType<typeof userReducer>;
