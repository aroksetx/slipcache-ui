export interface UserAuthCredentials {
    email?: string;
    password?: string;
}

export interface SignInResponse {
    token: string;
}

export interface UserProfile extends UserAuthCredentials {
    firstName?: string;
    lastName?: string;
    status?: string;
    email?: string;
    username?: string;
    uname?: string;
    sessionToken?: string;
    timestamp?: number;
    createdTimestamp?: number;
    updatedTimestamp?: number;
    objectId?: string;
}


export interface UserSignUpCred extends UserProfile {

}

