import {Epic} from 'redux-observable';
import {catchError, filter, switchMap, withLatestFrom} from 'rxjs/operators';
import {isActionOf, RootAction, RootState,} from 'typesafe-actions';
import {hi, idle} from '../actions/core';
import {from, of, concat} from 'rxjs';
import {loadUserBalance, loadUserInfo, logInUser} from '../actions/user';
import {SignInResponse, UserAuthCredentials, UserProfile} from '../../../types';
import {Api} from '../../api';
import {storage} from '../../../services';


const ApiURLSignUp = () => `/users/create`;
const ApiURLSignIn = () => `/users/login`;
const ApiURLRecover = () => `/recover`;
const ApiURLUserProfile = () => `/user/token/[TOKEN]?token=[TOKEN]`;
const ApiURLUserBalance = (userId: string) => `/user/${userId}/balance?token=[TOKEN]`;

//https://iproxy.online/api/user/KrtVEb5BwY/connections?token=r%3Af6e42fd42cc4d1c0123d80ee6fac5c86

export const userSignInEpic: Epic<RootAction, RootAction, RootState> = (action$, state$) =>
    action$.pipe(
        filter(isActionOf(logInUser.request)),
        withLatestFrom(state$),
        switchMap(([{payload}]) => {
            let user: UserAuthCredentials = payload as UserAuthCredentials;
            return from(Api.post(ApiURLSignIn(), user as any)).pipe(
                switchMap(({data}) => {
                    storage.addItem('SYSTEM', 'token', (data as SignInResponse).token);
                    return of(logInUser.success(null, null));
                }),
                catchError((error) => {
                    console.info('Info:> error :=', error);
                    return of(logInUser.failure(null))
                })
            )
        }),
        catchError((error) => {
            console.info('Info:> error :=', error);
            return of(logInUser.failure(null))
        })
    );


export const userProfileEpic: Epic<RootAction, RootAction, RootState> = (action$, state$) =>
    action$.pipe(
        filter(isActionOf(loadUserInfo.request)),
        withLatestFrom(state$),
        switchMap((...rest) => {
            return from(Api.get(ApiURLUserProfile())).pipe(
                switchMap(({data}) => {
                    return concat(
                        of(loadUserInfo.success(data as UserProfile)),
                        of(loadUserBalance.request({userId: (data as UserProfile).id}))
                    )
                })
            )
        }),
        catchError((error: Error) => {return of(loadUserInfo.failure(error))})
    )


export const loadUserBalanceEpic: Epic<RootAction, RootAction, RootState> = (action$, state$) =>
    action$.pipe(
        filter(isActionOf(loadUserBalance.request)),
        withLatestFrom(state$),
        switchMap(([{payload}]) => {
            return from(Api.get(ApiURLUserBalance(payload.userId))).pipe(
                switchMap(({data}) => {
                    return of(loadUserBalance.success({balance: 0}));
                })
            )
        }),
        catchError((error: Error) => {return of(loadUserBalance.failure(error))})
    )


