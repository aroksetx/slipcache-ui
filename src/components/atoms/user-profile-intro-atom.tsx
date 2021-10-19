import React, {useState, useEffect, useRef, useCallback, useReducer, FunctionComponent} from 'react';
import styled from 'styled-components';

interface UserProfileIntroAtomProps {
    firstName?: string;
    lastName?: string;
    description?: string
}

export const UserProfileIntroAtom: FunctionComponent<UserProfileIntroAtomProps> = (props) => {
    const {
        description,
        lastName,
        firstName
    } = props;

    const _generateTitle = () => {
        return `${firstName || '-'} ${lastName || '-'}`;
    }

    return (
        <Wrapper>
            <Title>{`${_generateTitle()}`}</Title>
            <Description>
                {description || '-'}
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
  width: 100%;
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
