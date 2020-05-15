import React from 'react';
import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps})=> {
    return (
        <div className='group'>
            {/* otherProps 就是name value之类的*/}
            <input className='form-input' onChange={handleChange} {...otherProps} type="text"/>
            {label ? (
                <label 
                className={
                    `${otherProps.value.length ? 'shrink' : ''} form-input-label`
                }>
                    {label}
                </label>
            ):null}
        </div>
    )
}
export default FormInput;