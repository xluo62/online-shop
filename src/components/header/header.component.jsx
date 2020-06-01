import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/leaf.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import  CartIcon  from '../cart-icon/cart-icon.component';

import CartDropDown from '../cart-dropdown/cart-dropdown.component';

import {selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { createStructuredSelector } from 'reselect';
const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='Logo'></Logo>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                Shop
            </Link>
            <Link className='option' to='/shop'>
                Shop
            </Link>
            { currentUser ? 
                <div className='option'> Welcome! {currentUser.displayName}
                    <div className = "sign-out" onClick={ () => auth.signOut() }> 
                    Sign Out
                    </div>
                </div>
                :
                <Link className='option' to='/signin'>
                    Sign In
                </Link>
            }
            <CartIcon/>  
        </div>
        {console.log("header rerendered")}
        {console.log(hidden)}
        {
            
            hidden ? null : <CartDropDown></CartDropDown>
        }
        
       
    </div>
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
export default connect(mapStateToProps)(Header);