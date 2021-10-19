import {Epic} from 'redux-observable';
import {isActionOf, RootAction, RootState,} from 'typesafe-actions';
import { idle, initAuthorizedApp} from '../actions/core';
import {catchError, debounce, filter, last, switchMap, withLatestFrom} from 'rxjs/operators';
import {concat, interval, of} from 'rxjs';
import {loadUserInfo} from '../actions/user';



export const initAuthorizedEpic: Epic<RootAction, RootAction, RootState> = (action$, state$) =>
    action$.pipe(
        filter(isActionOf(initAuthorizedApp)),
        debounce(() => interval(200)),
        withLatestFrom(action$),
        switchMap(() => {
            return concat(
                of(loadUserInfo.request(null, null)),
            )
        }),
        catchError((error: Error) => {return of(idle())})
    );

