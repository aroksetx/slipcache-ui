import {createAsyncAction} from 'typesafe-actions';
import {Phone} from '../../../types/phones';

const LOAD_ALL_PHONES = 'phones/LOAD_ALL_PHONES';
const LOAD_ALL_PHONES_SUCCESS = 'phones/LOAD_ALL_PHONES_SUCCESS';
const LOAD_ALL_PHONES_FAILURE = 'phones/LOAD_ALL_PHONES_FAILURE';

export const loadUserPhones = createAsyncAction(
    LOAD_ALL_PHONES,
    LOAD_ALL_PHONES_SUCCESS,
    LOAD_ALL_PHONES_FAILURE
)<any, any, Error>();
