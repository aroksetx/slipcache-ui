import React, {useState, useEffect, useRef, useCallback, useReducer, FunctionComponent} from 'react';
import styled from 'styled-components';
import {AppLogoAtom} from '../components/atoms';
import {Alert, AlertIcon, Button, Input, Stack} from '@chakra-ui/react';
import {UserSignUpCred} from '../types';
import {isEmpty, eq} from "lodash";
import store from '../core/store/store';
import {signupUser} from '../core/store/actions/user';

const appLogo = require('./../assets/images/logo.png')

interface SignUpScreenProps {

}

export const SignUpScreen: FunctionComponent<SignUpScreenProps> = (props) => {
    const {} = props;
    const [signCred, setSignCred] = useState<UserSignUpCred>();
    const [repeatPassword, setRepeatPassword] = useState<any>();
    const [showNotification, setShowNotification] = useState(false);

    useEffect(() => {
        if(!isEmpty(repeatPassword) && (signCred?.hasOwnProperty('password') && !isEmpty(signCred.password))) {
            setShowNotification(repeatPassword != signCred.password);
        }
    }, [repeatPassword, signCred])

    const _create = () => {
        store.dispatch(signupUser.request({...signCred}))
    }

    const _setCred = (key, value) => {
        setSignCred({
            ...signCred,
            [key]: value
        });
    };

    const _hasCredIssues = () => signCred?.hasOwnProperty('firstName') && !isEmpty(signCred?.firstName) &&
        signCred?.hasOwnProperty('lastName') && !isEmpty(signCred?.lastName) &&
        signCred?.hasOwnProperty('email') && !isEmpty(signCred?.email) &&
        signCred?.hasOwnProperty('uname') && !isEmpty(signCred?.uname) &&
        signCred?.hasOwnProperty('password') && !isEmpty(signCred?.password);

    return (
        <Wrapper>
            <AppLogoAtom url={appLogo?.default} size={'l'}/>

            <Stack spacing={8}>
                {showNotification ? (
                    <Alert  status="warning">
                        <AlertIcon/>
                        Seems your account is about expire, upgrade now
                    </Alert>
                ) : null}

                <Stack spacing={3}>
                    <Input placeholder="First Name" onChange={(e) => _setCred('firstName', e?.target?.value)}/>
                    <Input placeholder="Last Name"  onChange={(e) => _setCred('lastName', e?.target?.value)}/>
                    <Input placeholder="Email Address"  onChange={(e) => _setCred('email', e?.target?.value)}/>
                    <Input placeholder="User Name"  onChange={(e) => _setCred('uname', e?.target?.value)}/>
                    <Input type={'password'} placeholder="Password"  onChange={(e) => _setCred('password', e?.target?.value)}/>
                    <Input type={'password'} placeholder="Reenter Password" onChange={(e) =>  setRepeatPassword(e?.target?.value)}/>
                </Stack>
                <Button variant="solid"
                        disabled={!_hasCredIssues()}
                        onClick={() => _create()}>
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
