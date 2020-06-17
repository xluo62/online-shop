import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishKey = 'pk_test_51GqhzeBQmwHq8hxk2GBBcfnS2r3uMQoXZEZ9BcVutgPsxi6bcKQ52BftF8jI1Co1WH8zhFgD7uVjYXqBJryhhyqf00lTkTZaGD';

const onToken = token => {
    console.log(token);
    alert('Payment Successful');
}

    return (
        <StripeCheckout
            currency='CAD'
            label='Pay Now' 
            name='UZI Clothing'
            billingAddress
            shippingAddress
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            image='https://img.icons8.com/cotton/64/000000/mobile-payment--v1.png'
            token={onToken}
            stripeKey={publishKey}
        />


        
    )
}
export default StripeCheckoutButton;