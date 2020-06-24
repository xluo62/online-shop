import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';
import React from 'react';

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps}) => {
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
        ) : (
            <WrappedComponent {...otherProps}/>
        )
//this way we pass through the props to th component we wrap

     
}

export default WithSpinner;