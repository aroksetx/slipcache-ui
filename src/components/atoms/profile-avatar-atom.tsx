import React, {useState, useEffect, useRef, useCallback, useReducer, FunctionComponent} from 'react';
import {UIProps} from '../../types';
import avatarPlaceholder from './../../assets/icons/male-avatar.svg';
import styled from 'styled-components';

interface ProfileAvatarAtomProps {
    url?: string;
}

export const ProfileAvatarAtom: FunctionComponent<ProfileAvatarAtomProps> = (props) => {
    const {
        url
    } = props;
    return (
        <Wrapper>
            <Avatar src={url || avatarPlaceholder}/>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  width: 120px;
  height: 120px;
  background-color ${(props: UIProps) => props.theme.colors.blumud};
  border-radius:100px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Avatar = styled.img`
  background-color: ${(props: UIProps) => props?.theme?.colors?.white};
  border-radius: 100px;
  width: 92%;
`;
