import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/bag.svg';
import './cart-icon.styles.scss';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';



const CartIcon = (props) => {
    console.log("cart icon is rerendered");
    return(

    <div className='cart-icon'
    onClick={ props.toggleCartHidden } >
        <ShoppingIcon 
        className='shopping-icon'></ShoppingIcon>
        <span className="item-count">{props.itemCount}</span>
    </div>
);
}

const mapDisPatchToProps = (dispatch) => (
    {
        toggleCartHidden: () => dispatch(toggleCartHidden())
    }
)
const mapStateToProps = (state) =>{
    console.log("itemcount is called");
    return ({
        itemCount: selectCartItemsCount(state)
    });
}



export default connect(mapStateToProps, mapDisPatchToProps)(CartIcon);