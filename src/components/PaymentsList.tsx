import React, {useState, useEffect, useRef, useCallback, useReducer, FunctionComponent} from 'react';
import styled from 'styled-components';
import {BtPaymentAtom} from './atoms';

const paymentPaypal = require('./../assets/images/paypalpaypal.png').default;
const paymentVenmo = require('./../assets/images/venmovenmo.png').default;
const paymentCashApp = require('./../assets/images/cashappcashapp.png').default;
const paymentCash = require('./../assets/images/cashcash.png').default;
const paymentMessenger = require('./../assets/images/messengermessenger.png').default;
const paymentInsta = require('./../assets/images/instainsta.png').default;
const paymentGpay = require('./../assets/images/gpaygpay.png').default;
const paymentSlip = require('./../assets/images/slipcslipcash.png').default;

interface PaymentsListProps {

}

interface PaymentOption {
    icon: string;
    title: string;
    onClick: Function;
}

export const PaymentsList: FunctionComponent<PaymentsListProps> = (props) => {
    const {} = props;

    const options: PaymentOption[] = [
        {
            icon: paymentPaypal,
            onClick: () => {
            },
            title: ''
        },
        {
            icon: paymentVenmo,
            onClick: () => {
            },
            title: ''
        },
        {
            icon: paymentCashApp,
            onClick: () => {
            },
            title: ''
        },
        {
            icon: paymentCash,
            onClick: () => {
            },
            title: ''
        }, {
            icon: paymentMessenger,
            onClick: () => {
            },
            title: ''
        }, {
            icon: paymentInsta,
            onClick: () => {
            },
            title: ''
        }, {
            icon: paymentGpay,
            onClick: () => {
            },
            title: ''
        }, {
            icon: paymentSlip,
            onClick: () => {
            },
            title: ''
        }
    ]

    return (
        <Wrapper>
            {options.map((option) => {
                return (
                    <BtWrapper>
                        <BtPaymentAtom size={'auto'}>
                            <PaymentIcon src={option?.icon}/>
                        </BtPaymentAtom>
                    </BtWrapper>
                );
            })}

        </Wrapper>
    );
}

const Wrapper = styled.div`
    display:  flex;
    flex-wrap: wrap;
    margin: 10px 0;
    max-width: 400px;
    width: 100%;
`;

const BtWrapper = styled.div`
  flex: 1 1 40%;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface PaymentIconProps {
    src: string;
}
const PaymentIcon = styled.div<PaymentIconProps>`
  background-image: url(${(props:PaymentIconProps) => props?.src});
  width: 175px;
  height: 50px;
  background-size: 145px;
  background-repeat: no-repeat;
  background-position: center
`;
