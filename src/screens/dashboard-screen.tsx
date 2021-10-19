import React, {useState, useEffect, useRef, useCallback, useReducer, FunctionComponent} from 'react';
import {AppLogoAtom, ProfileAvatarAtom, UserProfileIntroAtom} from '../components/atoms';
import styled from 'styled-components';
import {PaymentsList, ShareList} from '../components';
import {UIProps} from '../types';
import {useTypedSelector} from '../core/store/selectors/type-selector';
const appLogo = require('./../assets/images/logo.png')
interface DashboardScreenProps {

}

export const DashboardScreen: FunctionComponent<DashboardScreenProps> = (props) => {
    const {} = props;
    const {profile} = useTypedSelector(({user}) => user);
    console.log('Log:> [dashboard', profile);
    return (
        <Wrapper>
            <AppLogoAtom url={appLogo?.default} size={'l'} />
            <div className={'user-profile '}>
                <div className={'avatar'}>
                    <ProfileAvatarAtom/>
                </div>
                <UserProfileIntroAtom
                    lastName={profile?.lastName}
                    firstName={profile?.firstName}/>
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
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    width: 100%;
  }
  
  .avatar{
    width: 150px;
    padding-right: 20px;
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
