import React, {useState, useEffect, useRef, useCallback, useReducer, FunctionComponent} from 'react';
import styled from 'styled-components';
import {Stack, Input, Button, Alert, AlertIcon} from '@chakra-ui/react'
import {AppLogoAtom} from '../components/atoms';
import {routes} from '../navigation';
import store from '../core/store/store';
import {logInUser} from '../core/store/actions/user';
import {isEmpty} from 'lodash';
const appLogo = require('./../assets/images/logo.png')

interface LoginScreenProps {

}


export const LoginScreen: FunctionComponent<LoginScreenProps> = (props) => {
    const {} = props;

    const [username, setUsername] = useState<any>(null);
    const [password, setPassword] = useState<any>(null);

    const _signin = () => {
        store.dispatch(logInUser.request({
            email: username,
            password: password,
        }))
    }



    return (
        <Wrapper>
            <AppLogoAtom url={appLogo?.default} size={'l'} />

            <Stack spacing={5}>
                <Alert status="warning">
                    <AlertIcon />
                    Seems your account is about expire, upgrade now
                </Alert>

                <Stack spacing={3}>
                    <Input placeholder="Email"
                           onChange={(e) =>
                               setUsername(e?.target?.value)}/>
                    <Input type={'password'}
                           onChange={(e) =>
                               setPassword(e?.target?.value)}
                           placeholder="Password"/>
                    <Button colorScheme="pink"
                            disabled={isEmpty(username) || isEmpty(password)}
                            variant="solid" onClick={() => _signin()}>
                        Sign In
                    </Button>
                    <div>Forgot Credentials?
                    </div>
                    <Button colorScheme="pink" variant="solid" onClick={() => window.location.href = `${routes.auth.signup}`}>
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
