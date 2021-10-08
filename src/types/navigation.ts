import {Component} from 'react';

export interface NavigationStackItem {
    path: string;
    component?: Component | any;
    private: boolean;
}

export interface NavigationStack extends Array<NavigationStackItem > {
}
