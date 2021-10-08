export interface UserAuthCredentials {
    email?: string;
    password?: string;
}

export interface SignInResponse {
    token: string;
}

export interface UserProfile {
    email?: string;
    telegram?: string;
    firstName?: string;
    slaveServerId?: string;
    userRole?: string;
    username?: string;
    region?: string;
    createdAtLeastOnePhone?: boolean;
    api_key?: string;
    id?: string;
    timestamp?: number;
    createdTimestamp?: number;
    updatedTimestamp?: number;
}
