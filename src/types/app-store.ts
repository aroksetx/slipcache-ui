import {UserProfile} from './userAuthCredentials';

export interface App {
    auth: any;
    profile: UserProfile;
    balance: number
}
