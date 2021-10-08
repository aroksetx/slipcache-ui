import {NavigationStack} from '../../types';
import {routes} from '../routes';
import React from 'react';

export const appStack: NavigationStack = [
    {
        private: false,
        path: routes.common.faq,
        component: (<div>2</div>)
    }
];

