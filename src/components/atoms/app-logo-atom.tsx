import React, {useState, useEffect, useRef, useCallback, useReducer, FunctionComponent} from 'react';
import styled, {css} from 'styled-components';
import {ThemeUI, UIProps} from '../../types';

type Size = 's'|'m'|'l'|'xl';

interface AppLogoAtomProps {
    url?: string;
    size?: Size;
}

export const AppLogoAtom: FunctionComponent<AppLogoAtomProps> = (props) => {
    const {
        url,
        size = 'm'
    } = props;
    return (
        <Wrapper>
            <Logo size={size} src={url}/>
        </Wrapper>
    );
}

const Wrapper = styled.div`

`;


const buildLogoSize = (size: Size) => {
    let width, height;
    if(size === 's'){
        width = '60px';
    } else if(size === 'm') {
        width = '120px';
    } else if(size === 'l') {
        width = '240px';
    } else if(size === 'xl'){
        width = '300px';
    }
    return `
        width: ${width};
    `;
}

interface LogoProps extends UIProps {
    size?: Size;
}
const Logo = styled.img<LogoProps>`
 ${(props: LogoProps) => props.size && css`
  ${buildLogoSize(props.size)}
 `}
`;
