import React from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
import * as emailjs from "emailjs-com";

const StripeCheckoutButton = ({ price, order }) => {
  const priceForStripe = price * 100;
  // change before going live
  const publishableKey = "pk_test_TD3bJFY6vKMBXowUkCZphnfe";

  const onToken = token => {
    console.log("TOKEN: ", token);
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token: token
      }
    })
      .then(response => {
        alert("Sucessful payment");
        console.log("RESPONSE.DATA.SUCCESS: ", response.data.success);
        const { receipt_email, receipt_url } = response.data.success;
        const { name, address } = response.data.success.billing_details;
        emailSubmit({ receipt_email, receipt_url, name, address });
      })
      .catch(error => {
        console.log("Payment Error: ", error);
        alert(
          "There was an issue with your payment! Please make sure you use the provided credit card."
        );
      });
  };

  const emailSubmit = emailData => {
    const { receipt_email, receipt_url, name, address } = emailData;

    const stringAddress = `${address.line1} ${
      address.line2 ? address.line2 : ""
    } ${address.city}, ${address.state}, ${address.country} ${
      address.postal_code
    }`;
    const addressFix = JSON.stringify(stringAddress);

    
    const stringOrder =  order.map(order => `Title: ${order.title} Quantity: ${order.quantity} Price: $${order.price} Size: ${order.size} Desc: ${order.desc}`)

    const orderFix = JSON.stringify(stringOrder);

    const messageUpdated = 
    `${name} bought a product! ` +
    ` Address -  ${addressFix} ` +
    ` Order - ${orderFix} ` +
    ` Receipt - ${receipt_url}`;
    

    const templateParams = {
      from_name: receipt_email,
      to_name: "l0tusart007@gmail.com",
      subject: "PRODUCT PURCHASED - Lotus Art",
      message_html: messageUpdated
    };

    emailjs
      .send(
        "gmail",
        "template_mgKZRCOz",
        templateParams,
        "user_ZGzQ6szqqXtsDwYcf6Edg"
      )
      .then(response => {
        alert("Artist has been informed of your purchase");
      })
      .catch(error => {
        console.log("Message Error: ", error);
        alert("There was an issue with your order! Please try again.");
      });
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
