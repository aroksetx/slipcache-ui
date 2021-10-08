import { StateType, ActionType } from 'typesafe-actions';

declare module 'typesafe-actions' {
    export type Store = StateType<typeof import('./src/core/store/store').default>;
    export type RootState = StateType<typeof import('./src/core/store/reducers').default>;
    export type RootAction = ActionType<typeof import('./src/core/store/actions').default>;

    interface Types {
        RootAction: RootAction;
    }
}
