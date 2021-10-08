import {combineEpics, Epic} from 'redux-observable';
import { RootAction, RootState } from 'typesafe-actions';
import * as core from './core';
import * as user from './user';
import * as phones from './phones';
import {catchError} from 'rxjs/operators';

const rootEpic: Epic<RootAction, RootAction, RootState> = (action$, store$, dependencies) =>
    combineEpics(
        ...Object.values(core),
        ...Object.values(user),
        ...Object.values(phones),
    )(action$, store$, dependencies).pipe(
        catchError((error, source) => {
            console.error(error);
            return source;
        }),
    );

export default rootEpic;
