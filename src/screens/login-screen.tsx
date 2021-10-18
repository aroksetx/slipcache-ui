import React, {useState, useEffect, useRef, useCallback, useReducer, FunctionComponent} from 'react';
import styled from 'styled-components';
import {Stack, Input, Button,    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,} from "@chakra-ui/react"
import {AppLogoAtom} from '../components/atoms';
const appLogo = require('./../assets/images/logo.png')

interface LoginScreenProps {

}

export const LoginScreen: FunctionComponent<LoginScreenProps> = (props) => {
    const {} = props;
    return (
        <Wrapper>
            <AppLogoAtom url={appLogo?.default} size={'l'} />

            <Stack spacing={5}>
                <Alert status="warning">
                    <AlertIcon />
                    Seems your account is about expire, upgrade now
                </Alert>

                <Stack spacing={3}>
                    <Input placeholder="Username"/>
                    <Input type={'password'} placeholder="Password"/>
                    <Button colorScheme="pink" variant="solid">
                        Sign In
                    </Button>
                    <div>Forgot Credentials?
                    </div>
                    <Button colorScheme="pink" variant="solid">
                        Register
                    </Button>

                    <Button variant="solid">
                        RegisterReturn to Slipcash.com Home
                    </Button>
                </Stack>
            </Stack>

        </Wrapper>
    );
}

const Wrapper = styled.div`

`;
