import React, {useState, useEffect, useRef, useCallback, useReducer, FunctionComponent} from 'react';
import styled from 'styled-components';
import {AppLogoAtom} from '../components/atoms';
import {Alert, AlertIcon, Button, Input, Stack} from '@chakra-ui/react';

const appLogo = require('./../assets/images/logo.png')

interface SignUpScreenProps {

}

export const SignUpScreen: FunctionComponent<SignUpScreenProps> = (props) => {
    const {} = props;
    return (
        <Wrapper>
            <AppLogoAtom url={appLogo?.default} size={'l'}/>

            <Stack spacing={8}>
                <Alert status="warning">
                    <AlertIcon/>
                    Seems your account is about expire, upgrade now
                </Alert>

                <Stack spacing={3}>
                    <Input placeholder="First Name"/>
                    <Input placeholder="Last Name"/>
                    <Input placeholder="User Name"/>
                    <Input type={'password'} placeholder="Password"/>
                    <Input type={'password'} placeholder="Reenter Password"/>
                    <Input placeholder="Email Address"/>
                </Stack>
                <Button variant="solid">
                    Create Account
                </Button>
            </Stack>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
