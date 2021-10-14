import React, {useState, useEffect, useRef, useCallback, useReducer, FunctionComponent} from 'react';
import {AppLogoAtom, ProfileAvatarAtom, UserProfileIntroAtom} from '../components/atoms';
import styled from 'styled-components';
import {PaymentsList, ShareList} from '../components';
import {UIProps} from '../types';
const appLogo = require('./../assets/images/logo.png')
interface DashboardScreenProps {

}

export const DashboardScreen: FunctionComponent<DashboardScreenProps> = (props) => {
    const {

    } = props;
    return (
        <Wrapper>
            <AppLogoAtom url={appLogo?.default} size={'l'} />
            <div className={'user-profile '}>
                <ProfileAvatarAtom/>
                <UserProfileIntroAtom/>
            </div>
            <PaymentsList/>
            <ShareList/>
            <SignInButton>
                Sign In
            </SignInButton>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  .user-profile {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const SignInButton = styled.div`
  cursor: pointer;
 background-color: ${(props: UIProps) => props?.theme?.colors?.black};
 color: ${(props: UIProps) => props?.theme?.colors?.white};
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 25px;
  height: 55px;
  margin-top: 50px;
`;