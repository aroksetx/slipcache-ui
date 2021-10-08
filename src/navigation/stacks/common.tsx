import React from 'react';
import {NavigationStack} from '../../types';
import {MainScreen} from '../../screens';

export const commonStack: NavigationStack = [
    {
        private: false,
        path: '/',
        component: (<MainScreen/>)
    }
]
