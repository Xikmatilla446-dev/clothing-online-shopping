import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import Logo   from '../../assets/shopping-logo.svg';


const StripeCheckoutButton = ({price}) => {

    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_p96FIxaPRECdEJQEQhP7P8Ll002UmWs1Ni';

  const onToken = token => {
        console.log(token);
        alert("Payment Successful");

    };

    return(
        <StripeCheckout

        label='Pay Now'
        name="Online Clothing MX."
        billingAddress
        shippingAddress
        image={Logo}
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}

        />
    )
};

export default StripeCheckoutButton;