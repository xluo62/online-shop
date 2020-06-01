import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';

import './cart-dropdown.styles.scss';

const CartDropDown = ({cartItems, history, dispatch}) => {
    console.log("cartDropDown rerendered");
    return(
    
        <div className="cart-dropdown">
            
            <div className="cart-items">
                {
                cartItems.length === 0 ? 
                <div className="cart-empty"> 
                <div>Cart is empty</div> 
                </div>
                : 
                cartItems.map(cartItem => 
                    <CartItem key={cartItem.id} item={cartItem}/>)
            }
            
            </div>
            
            <CustomButton onClick={
                 () => {history.push('/checkout');
                        dispatch(toggleCartHidden())} }>Go To Checkout </CustomButton>
        </div>
        );
}

// const mapStateToProps = state => {
//     console.log("map state is called");
//     return (

//     {
    
//     cartItems: state.cart.cartItems
// });

// }


const mapStateToProps = state => {
    console.log("map state is called");
    return (

    {
    
    cartItems: selectCartItems(state)
});

}

export default withRouter(connect(mapStateToProps)(CartDropDown));