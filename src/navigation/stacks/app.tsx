import {NavigationStack} from '../../types';
import {routes} from '../routes';
import React from 'react';
import {DashboardScreen, LoginScreen, SignUpScreen} from '../../screens';

export const appStack: NavigationStack = [
    {
        private: false,
        path: routes.app.public,
        component: <DashboardScreen/>
    },
    {
        private: false,
        path: routes.auth.signin,
        component: (<LoginScreen/>)
    },
    {
        private: false,
        path: routes.auth.signup,
        component: (<SignUpScreen/>)
    },
    {
        private: false,
        path: routes.app.dashboard,
        component: <DashboardScreen/>
    },
];

