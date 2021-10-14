import React, {useState, useEffect, useRef, useCallback, useReducer, FunctionComponent} from 'react';
import styled, {css} from 'styled-components';
import {UIProps} from '../../types';

type Size =  'auto'|'s' | 'm' | 'l' | 'xl';

interface BtPaymentAtomProps {
    size?: Size;
    onClick?: Function;
}

export const BtPaymentAtom: FunctionComponent<BtPaymentAtomProps> = (props) => {
    const {
        size = 'm',
        onClick = () => {},
        children,
    } = props;
    return (
        <Wrapper size={size} onClick={() => onClick()}>
            {children}
        </Wrapper>
    );
}

const buildSize = (size: Size) => {
    if (size === 's') {
        return `
                padding: 5px; 
             `;
    } else if (size === 'm') {
        return `
                padding: 10px; 
             `;
    } else if (size === 'l') {
        return `
            padding: 15px; 
             `;
    } else if (size === 'xl') {
        return `
            padding: 20px; 
             `;
    } else {
        return ``;
    }
}

interface WrapperProps extends UIProps {
    size?: Size;
}

const Wrapper = styled.div<WrapperProps>`
  cursor: pointer;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100px;
  min-height: 30px;
  width: fit-content;
  background-color: ${(props: UIProps) => props?.theme?.colors?.white};
  border-radius: 50px;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.15);
  transition: .3s;

  :hover {
    opacity: .8;
  }

  ${(props: WrapperProps) => props.size && css`
    ${buildSize(props.size)}
  `}
`;
