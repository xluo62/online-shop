import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import './checkout.styles.scss';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const CheckoutPage = ({total, cartItems}) => (


    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
            
        </div>
        { 
            cartItems.length ? 
            cartItems.map( cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} ></CheckoutItem>
            ))
            :
            <span className="cart-empty">Shopping Cart Is Empty</span>
        }
        
        
        <div className="total">
            {console.log("total price is rerendered")}
            <span>TOTAL: CAD { total }</span>
        </div>
        <div className="test-warning">
            Test Credit Card 
            <br></br>
            4242 4242 4242 4242 - EXP 01/21 CODE 123
        </div>
        <StripeCheckoutButton price={total}></StripeCheckoutButton>
    </div>
   
);
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);