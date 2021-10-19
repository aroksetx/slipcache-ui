import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import store from '../core/store/store';
import {theme} from '../styles/ApplicationTheme';
import styled, {ThemeProvider} from 'styled-components';
import AppNavigator from '../navigation/app-navigator';
import {debounce} from 'lodash';
import { ChakraProvider } from "@chakra-ui/react"
import {useAuthGuard} from '../hooks';
import {loadUserInfo} from '../core/store/actions/user';

const debounceLoad = debounce((callback) => {
    callback();
}, 300, {
    'leading': false,
    'trailing': true
})


function App() {
    const auth = useAuthGuard();

    useEffect(() => {
        if(auth?.isAuthorized && auth?.isAuthSection()){
            window.location.href = '/';
        }
    }, [auth])

    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <ChakraProvider>
                <Wrapper>
                    <ContentLayout>
                        <AppNavigator/>
                    </ContentLayout>
                </Wrapper>
                </ChakraProvider>
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
