import {NavigationStack} from '../../types';
import {routes} from '../routes';
import React from 'react';
import {DashboardScreen, LoginScreen, SignUpScreen} from '../../screens';

export const appStack: NavigationStack = [
    {
        private: false,
        path: '/',
        component: (<DashboardScreen/>)
    },
    {
        private: false,
        path: '/qwe',
        component: (<LoginScreen/>)
    },
    {
        private: false,
        path: routes.auth.signup,
        component: (<SignUpScreen/>)
    }
];

