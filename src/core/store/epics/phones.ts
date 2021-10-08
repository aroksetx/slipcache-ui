import {Epic} from 'redux-observable';
import {isActionOf, RootAction, RootState,} from 'typesafe-actions';
import {catchError, filter, switchMap, withLatestFrom} from 'rxjs/operators';
import {loadUserPhones} from '../actions/phones';
import {from, of} from 'rxjs';
import {idle} from '../actions/core';
import {Api} from '../../api';
import {logInUser} from '../actions/user';

const ApiURLLoadUserPhones = () => `/phones/all?token=[TOKEN]`


export const loadUserPhonesEpic: Epic<RootAction, RootAction, RootState> = (action$, state$) =>
    action$.pipe(
        filter(isActionOf(loadUserPhones.request)),
        withLatestFrom(state$),
        switchMap((...params) => {
            return from(Api.get(ApiURLLoadUserPhones())).pipe(
                switchMap(({data}) => {
                    console.info(data);
                    return of(loadUserPhones.success(data))
                }),
                catchError((error: Error) => {return of(loadUserPhones.failure(null))})

            )
        }),
        catchError((error: Error) => {return of(idle())})

    );
