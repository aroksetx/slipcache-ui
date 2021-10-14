import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import RoutesStack from './navigation-stack';
import {useAuthGuard} from '../hooks';

const AppNavigator = () => {
    const routes = RoutesStack.reduce((acc: any, value) => ([
        ...acc,
        ...value.map((stackItem, i) => stackItem.private
            ? <PrivateRoute key={i} path={stackItem.path}>{stackItem.component}</PrivateRoute>
            : <Route key={i} path={stackItem.path}>{stackItem.component}</Route>
        )
    ]), []);
    console.log('Log:> [app-navigator.tsx] :=', routes);

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
    return (
        <Route {...rest} render={(props) => (
            authGuard.isAuthorized === true
                ? children
                : <Redirect to='/login' />
        )} />
    )
}

export default AppNavigator;
