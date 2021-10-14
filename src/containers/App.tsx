import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import store from '../core/store/store';
import {hi, initAuthorizedApp} from '../core/store/actions/core';
import {theme} from '../styles/ApplicationTheme';
import styled, {ThemeProvider} from 'styled-components';
import AppNavigator from '../navigation/app-navigator';
import {logInUser} from '../core/store/actions/user';
import {useAuthGuard} from '../hooks';
import {debounce} from 'lodash';
import {GlobalStyle} from '../styles/gloabalStylyng';

const debounceLoad = debounce((callback) => {
    callback();
}, 300, {
    'leading': false,
    'trailing': true
})


function App() {
    const authGuard = useAuthGuard();

    useEffect(() => {
        console.log('Log:> [App.tsx] :=', );
        if(authGuard.isAuthorized != null){
            !authGuard.isAuthorized
                ? store.dispatch(logInUser.request({
                    password: 'Detroytmetal92!',
                    email: 'aroksetxua@gmail.com'
                }))
                : store.dispatch(initAuthorizedApp())
        }
    }, [authGuard])

    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <GlobalStyle/>
                <Wrapper>
                    <ContentLayout>
                        <AppNavigator/>
                    </ContentLayout>
                </Wrapper>
            </ThemeProvider>
        </Provider>
    );
}

export default App;


const Wrapper = styled.div`
  box-sizing: border-box;
  padding-bottom: 30px;
  padding-top: 40px;
`;

const ContentLayout = styled.div`
  max-width: 400px;
  margin: auto;
  box-sizing: border-box;
  padding: 0 10px;
`;
