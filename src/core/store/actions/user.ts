import {createAsyncAction} from 'typesafe-actions';
import {UserAuthCredentials, UserProfile, UserSignUpCred} from '../../../types';

const LOGIN_USER = 'user/LOGIN_USER';
const LOGIN_USER_SUCCESS = 'user/LOGIN_USER_SUCCESS';
const LOGIN_USER_FAILURE = 'user/LOGIN_USER_FAILURE';

export const logInUser = createAsyncAction(
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE
)<UserAuthCredentials, UserProfile, Error>();


const LOAD_USER_INFO = 'user/LOAD_USER_INFO';
const LOAD_USER_INFO_SUCCESS = 'user/LOAD_USER_INFO_SUCCESS';
const LOAD_USER_INFO_FAILURE = 'user/LOAD_USER_INFO_FAILURE';

export const loadUserInfo = createAsyncAction(
    LOAD_USER_INFO,
    LOAD_USER_INFO_SUCCESS,
    LOAD_USER_INFO_FAILURE
)<null, UserProfile, Error>();

const LOAD_USER_BALANCE = 'user/LOAD_USER_BALANCE';
const LOAD_USER_BALANCE_SUCCESS = 'user/LOAD_USER_BALANCE_SUCCESS';
const LOAD_USER_BALANCE_FAILURE = 'user/LOAD_USER_BALANCE_FAILURE';

export const loadUserBalance = createAsyncAction(
    LOAD_USER_BALANCE,
    LOAD_USER_BALANCE_SUCCESS,
    LOAD_USER_BALANCE_FAILURE
)<{userId: string}, { balance: number }, Error>();


const SIGNUP_USER = 'user/SIGNUP_USER';
const SIGNUP_USER_SUCCESS = 'user/SIGNUP_USER_SUCCESS';
const SIGNUP_USER_FAILURE = 'user/SIGNUP_USER_FAILURE';

export const signupUser = createAsyncAction(
    SIGNUP_USER,
    SIGNUP_USER_SUCCESS,
    SIGNUP_USER_FAILURE
)<UserSignUpCred, UserProfile, Error>();
