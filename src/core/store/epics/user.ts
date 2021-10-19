import {Epic} from 'redux-observable';
import {catchError, filter, switchMap, withLatestFrom} from 'rxjs/operators';
import {isActionOf, RootAction, RootState,} from 'typesafe-actions';
import {hi, idle} from '../actions/core';
import {from, of, concat} from 'rxjs';
import {loadUserInfo, logInUser, signupUser} from '../actions/user';
import {Api} from '../../api';
import {storage} from '../../../services';
import {routes} from '../../../navigation';


const ApiURLSignUp = () => `/signup`;
const ApiURLLogin = () => `/login`;
const ApiURLProfile = () => `/me`;


export const signupUserEpic: Epic<RootAction, RootAction, RootState> = (action$, state$) =>
    action$.pipe(
        filter(isActionOf(signupUser.request)),
        withLatestFrom(state$),
        switchMap(([{payload}]) => {
            return from(Api.post(ApiURLSignUp(), payload)).pipe(
                switchMap(({data}) => {
                    if(data?.sessionToken != null){
                        storage.addItem('SYSTEM', 'token', data?.sessionToken);
                    }
                    window.location.reload();
                    return of(signupUser.success(data));
                })
            )
        }),
        catchError((error: Error) => {return of(signupUser.failure(error));})
    )

export const loginEpic: Epic<RootAction, RootAction, RootState> = (action$, state$) =>
    action$.pipe(
        filter(isActionOf(logInUser.request)),
        withLatestFrom(state$),
        switchMap(([{payload}]) => {
            return from(Api.post(ApiURLLogin(), payload)).pipe(
                switchMap(({data}) => {
                    if(data?.sessionToken != null){
                        storage.addItem('SYSTEM', 'token', data?.sessionToken);
                    } else {
                        throw new Error(data)
                    }
                    window.location.reload();
                    return of(logInUser.success(data));
                })
            )
        }),
        catchError((error: Error) => {return of(logInUser.failure(error));})
    )


export const loadUserInfoEpic: Epic<RootAction, RootAction, RootState> = (action$, state$) =>
    action$.pipe(
        filter(isActionOf(loadUserInfo.request)),
        withLatestFrom(state$),
        switchMap(([{payload}]) => {
            const isAuthPage = window.location.href.includes(routes.auth.signin)
                || window.location.href.includes(routes.auth.signup) ;

            return from(Api.post(ApiURLProfile())).pipe(
                switchMap(({data}) => {
                    if(data?.isAutorized != null && !data?.isAutorized && !isAuthPage){
                        window.localStorage.clear();
                        window.location.href = routes.auth.signin;
                    } else{
                        return of(loadUserInfo.success(data));
                    }
                })
            )
        }),
        catchError((error: Error) => {return of(loadUserInfo.failure(error));})
    )
