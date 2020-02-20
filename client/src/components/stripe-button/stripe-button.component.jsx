import React from "react";
import axios from 'axios';
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  // change before going live
  const publishableKey = "pk_live_45xUwb7UMKxH8QBIuj9jXrxH";

  const onToken = token => {
    // console.log("token", token);
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token: token
      }
    }).then(response => {
      alert('Sucessful payment')
    })
    .catch(error => {
      console.log('Payment Error: ', error)
      alert('There was an issue with your payment! Please make sure you use the provided credit card.')
    })
  };

  return (
    <StripeCheckout
      name="Lotus Art"
      label="Pay Now"
      currency="USD"
      image="https://svgshare.com/i/CUz.svg"
      panelLabel="Pay Now"
      amount={priceForStripe}
      description={`Your total is $${price}`}
      shippingAddress
      billingAddress
      zipCode
      allowRememberMe
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
