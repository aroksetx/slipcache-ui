import {createEpicMiddleware} from 'redux-observable';
import { RootAction, RootState } from 'typesafe-actions';
import {composeWithDevTools} from 'redux-devtools-extension';
import {applyMiddleware, compose, createStore} from 'redux';
import logger from 'redux-logger';
import reducers from './reducers';
import epics from './epics';

const configureStore = (initialState = {}) => {
    const epicMiddleware = createEpicMiddleware<RootAction, RootAction, RootState>();
    const composedEnhancers = process.env.NODE_ENV_MODE !== 'prod'
        ? composeWithDevTools(applyMiddleware(epicMiddleware, logger))
        : compose(applyMiddleware(epicMiddleware));
    const store = createStore(reducers, initialState, composedEnhancers);
    epicMiddleware.run(epics);
    return store;
}

const store = configureStore();
export { store, store as Store };

// default export needed for `types.d.ts` and integration with typesafe-actions library
export default store;
