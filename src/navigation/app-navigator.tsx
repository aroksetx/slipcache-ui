import React, {useEffect} from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import RoutesStack from './navigation-stack';
import {useAuthGuard} from '../hooks';
import {isEmpty} from 'lodash';

const AppNavigator = () => {
    const routes = RoutesStack.reduce((acc: any, value) => ([
        ...acc,
        ...value.map((stackItem, i) => stackItem.private
            ? <PrivateRoute exact key={i} path={stackItem.path}>{stackItem.component}</PrivateRoute>
            : <Route key={i} path={stackItem.path} exact>{stackItem.component}</Route>
        )
    ]), []);

    return (
        <BrowserRouter
            forceRefresh={true}
            basename='/'>
            <Switch>
                {routes}
            </Switch>
        </BrowserRouter>
    );
}


const PrivateRoute = ({ children, ...rest }) => {
    const authGuard = useAuthGuard();
    const hasAuthToken = JSON?.parse(window?.localStorage?.getItem('system/token'));
    return (
        <Route  {...rest} render={(props) => (
            authGuard.isAuthorized === true || !isEmpty(hasAuthToken)
                ? children
                : <Redirect to='/signin' />
        )} />
    )
}

export default AppNavigator;
