import React from 'react'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import Payment from './payment';


const  promise = loadStripe("pk_test_51MJIK4F68suc6rBy0qQAMsCsy6VF5WM8HIcimJITDrwgncd qxGMFPV3cWPgIlnYGIInkAgOfUSStbFErDyXn32UM00dyxdrNum");
function PaymentComponent() {


  return (
    <Elements stripe={promise} >
       <Payment />
    </Elements>
  )
}

export default PaymentComponent
