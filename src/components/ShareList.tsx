import React, {useState, useEffect, useRef, useCallback, useReducer, FunctionComponent} from 'react';
import styled from 'styled-components';
import {UIProps} from '../types';
import {BtCircleAtom} from './atoms';
import { Icon } from "@chakra-ui/react"
import { EmailIcon } from '@chakra-ui/icons'
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";

interface ShareListProps {
    email?:string;
    nick?:string;
}

export const ShareList: FunctionComponent<ShareListProps> = (props) => {
    const {
        email = ''
    } = props;
    return (
        <Wrapper>
            <CallAction>
                Share My Slip Link!
            </CallAction>
            <ActionContainer>
                <Spline/>
                <BtContainer>
                    <BtCircleAtom url={`sms:?&amp;body=https://slip.cash/-test`}>
                        <Icon w={12} h={12} as={IoChatbubbleEllipsesSharp} />
                    </BtCircleAtom>
                    <div className={'title'}>SMS</div>
                </BtContainer>
                <BtContainer>
                    <BtCircleAtom url={`mailto:${email}?subject=Mail from xyz.com`}>
                        <Icon w={12} h={12} as={EmailIcon} />
                    </BtCircleAtom>
                    <div className={'title'}>Email</div>
                </BtContainer>
            </ActionContainer>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  width: 100%;
`;

const CallAction = styled.div`
  font-size: 26px;
  font-weight: 500;
  border-top: 1px solid ${(props: UIProps) => props?.theme?.colors?.grey};
  border-bottom: 1px solid ${(props: UIProps) => props?.theme?.colors?.grey};
  padding: 10px 0;
  text-align: center;
`;

const ActionContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  margin-top: 30px;
  padding: 0 20px;
`;

const Spline = styled.div`
  width: 1px;
  height: 80px;
  background-color: ${(props: UIProps) => props?.theme?.colors?.grey};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 50%;
`;

const BtContainer = styled.div`
  cursor: pointer;
  .title{
    font-weight: bold;
    text-align: center;
    margin-top: 20px;
  }
  transition: .3s;
  
  :hover {
    opacity: .8;
  }
`;
