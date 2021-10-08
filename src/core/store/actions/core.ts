import {createAction} from 'typesafe-actions';

const IDLE = 'app/IDLE';
const HI = 'core/HI';
const APP_INIT_ATHORIZED = 'core/APP_INIT_ATHORIZED';

export const idle = createAction(IDLE)<undefined>();
export const initAuthorizedApp = createAction(APP_INIT_ATHORIZED)<undefined>();
export const hi = createAction(HI)<undefined>();
