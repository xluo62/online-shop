import React from 'react';
import './custom-button.styles.scss';
import {ButtonContainer} from './custom-button.styles';
const CustomButton = ({  children, ...otherProps }) => (
    // <button className={ 
    // `${inverted ? 'inverted' : ''}
    //  ${isGoogleSignIn ? 'google-sign-in' : ''}
    // custom-button`} {...otherProps}> 
    // { children }
    // </button>
<ButtonContainer {...otherProps}>{children}</ButtonContainer>
);
export default CustomButton;