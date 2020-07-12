import React from 'react';
import {
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionLink,
    SignOut,
    LogoModifier
  } from './header.styles';
//import './header.styles.scss';
//import { Link } from 'react-router-dom';
//import { ReactComponent as Logo } from '../../assets/leaf.svg';
import { connect } from 'react-redux';
import  CartIcon  from '../cart-icon/cart-icon.component';

import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import { signOutStart } from '../../redux/user/user.actions';
import {selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { createStructuredSelector } from 'reselect';
const Header = ({ currentUser, hidden, signOutStart }) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <LogoModifier></LogoModifier>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>
                Shop
            </OptionLink>
            <OptionLink to='/shop'>
                Contact
            </OptionLink>
            { currentUser ? 
                <OptionLink as= 'div'> Welcome! {currentUser.displayName}
                    <SignOut onClick={ signOutStart }> 
                    Sign Out
                    </SignOut>
                </OptionLink>
                :
                <OptionLink to='/signin'>
                    Sign In
                </OptionLink>
            }
            <CartIcon/>  
        </OptionsContainer>
        {console.log("header rerendered")}
        {console.log(hidden)}
        {
            
            hidden ? null : <CartDropDown></CartDropDown>
        }
        
       
    </HeaderContainer>
);
//return 一个 state
// const mapStateToProps = ({user: { currentUser }, cart: { hidden }}) => (
//     {
//       currentUser,
//       hidden
//     }
//   )
// const mapStateToProps = (state) => (
//         {
//           currentUser: selectCurrentUser(state),
//           hidden: selectCartHidden(state)
//         }
//       )
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})
const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
}) 
export default connect(mapStateToProps, mapDispatchToProps)(Header);