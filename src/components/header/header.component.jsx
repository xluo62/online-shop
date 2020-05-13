import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
const Header = () => (
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
            </Link><Link className='option' to='/shop'>
                Shop
            </Link>
        </div>
    </div>
);
export default Header;