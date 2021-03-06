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
            onClick: () => window.open(`https://www.paypal.me/link`),
            title: ''
        },
        {
            icon: paymentVenmo,
            onClick: () =>  window.open(`https://Venmo.com/code?user_id=userid`),
            title: ''
        },
        {
            icon: paymentCashApp,
            onClick: () => window.open(`https://cash.app/userid`),
            title: ''
        },
        {
            icon: paymentCash,
            onClick: () => window.open(`sms:234234234234`),
            title: ''
        }, {
            icon: paymentMessenger,
            onClick: () => window.open(`https://m.me/USERI`),
            title: ''
        }, {
            icon: paymentInsta,
            onClick: () => window.open(`https://instagram.com/USERI`),
            title: ''
        }, {
            icon: paymentGpay,
            onClick: () => window.open(`https://instagram.com/USERI`),
            title: ''
        }, {
            icon: paymentSlip,
            onClick: () => {
                //https://instagram.com/<?php echo $user['instagramlink']; ?>
            },
            title: ''
        }
    ]

    return (
        <Wrapper>
            {options.map((option, index) => {
                return (
                    <BtWrapper key={index}>
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
