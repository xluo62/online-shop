import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/bag.svg';
import './cart-icon.styles.scss';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';




const CartIcon = (props) => (
    <div className='cart-icon'
    onClick={ props.toggleCartHidden } >
        <ShoppingIcon 
        className='shopping-icon'></ShoppingIcon>
        <span className="item-count">0</span>
    </div>
);

const mapDisPatchToProps = (dispatch) => (
    {
        toggleCartHidden: () => dispatch(toggleCartHidden())
    }
)

export default connect(null, mapDisPatchToProps)(CartIcon);