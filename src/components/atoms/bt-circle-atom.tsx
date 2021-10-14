import React, {useState, useEffect, useRef, useCallback, useReducer, FunctionComponent} from 'react';
import styled from 'styled-components';
import {UIProps} from '../../types';

interface BtCircleAtomProps {

}

export const BtCircleAtom: FunctionComponent<BtCircleAtomProps> = (props) => {
    const {

    } = props;
    return (
        <Wrapper>
            <Content>
                asd
            </Content>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props: UIProps) => props.theme.colors.grey};
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: -2px 2px 4px 1px rgb(0 0 0 / 15%);

`;

const Content = styled.div`
  background-color: ${(props: UIProps) => props.theme.colors.white};
  width: 87%;
  height: 87%;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
