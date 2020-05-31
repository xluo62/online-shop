import React from 'react';
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import './cart-dropdown.styles.scss';

const CartDropDown = ({cartItems}) => {
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
                null
            }
            {
                cartItems.map(cartItem => 
                <CartItem key={cartItem.id} item={cartItem}/>)
            }
            </div>
            
            <CustomButton>Go To Checkout </CustomButton>
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

export default connect(mapStateToProps)(CartDropDown);