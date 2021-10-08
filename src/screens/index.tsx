import React, {useState, useEffect, useRef, useCallback, useReducer} from 'react';
import styled from 'styled-components';
import {useTypedSelector} from '../core/store/selectors/type-selector';
import {Phone} from '../types/phones';

export const MainScreen = () => {
    const {phones} = useTypedSelector(({phones}) => phones) ;
    console.info('Info:> aaa :=', phones);

    return (
        <Wrapper>
            <div>
                <div>{phones.map((phone: Phone) => {
                    return (
                        <div style={{
                            marginBottom: '30px'
                        }}>
                            <div>Title: {phone.name}</div>
                            <div>Manufacturer: {phone.deviceManufacturer}</div>
                            <div>Model: {phone.deviceModel}</div>
                        </div>
                    )
                })}</div>
            </div>
       </Wrapper>
    );
}

const Wrapper = styled.div``;

