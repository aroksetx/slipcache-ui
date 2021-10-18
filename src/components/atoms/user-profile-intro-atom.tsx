import React, {useState, useEffect, useRef, useCallback, useReducer, FunctionComponent} from 'react';
import styled from 'styled-components';

interface UserProfileIntroAtomProps {

}

export const UserProfileIntroAtom: FunctionComponent<UserProfileIntroAtomProps> = (props) => {
    const {

    } = props;
    return (
        <Wrapper>
            <Title>SLIP CASH</Title>
            <Description>
                Please tap your preferred method of payment
            </Description>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 30px;
`;


const Title = styled.div`
  font-weight: 600;
  font-size: 26px;
  text-transform: uppercase;
  text-align: left;
`;

const Description = styled.div`
  font-size: 11px;
  text-align: left;
  font-weight: 400;
`;
