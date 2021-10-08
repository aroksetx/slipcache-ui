export interface ActivePlan {
    id?: string;
    expirationTimestamp?: any;
    startTimestamp?: any;
}

export interface DeviceMetrics {
    batteryHealth?: string;
    batteryLevel?: number;
    isCharging?: boolean;
    networkType?: string;
    latestDeviceMetricsTimestamp?: any;
}

export interface Phone {
    id?: string;
    timestamp?: any;
    updatedTimestamp?: any;
    userId?: string;
    name?: string;
    description?: string;
    phoneNumber?: string;
    phonePassword?: string;
    fireBaseToken?: string;
    isRoot?: boolean;
    appVersion?: string;
    version?: string;
    deviceModel?: string;
    deviceManufacturer?: string;
    appId?: string;
    slaveServerId?: string;
    macrosUrl?: string;
    active?: boolean;
    ipChangeEnabled?: boolean;
    heartbeats?: any[];
    dnsIpList?: any[];
    ipChangeMinutesInterval?: number;
    telegramNofiticationsEnabled?: boolean;
    activePlans?: ActivePlan[];
    sharedUsersEmails?: any[];
    prolongationEnabled?: boolean;
    iproxyTariffNotifications?: number[];
    simNotifications?: any[];
    deviceMetrics?: DeviceMetrics;
    latestIproxyNotificationTimestamp?: any;
    friendlyPinCode?: string;
    authToken?: string;
}
