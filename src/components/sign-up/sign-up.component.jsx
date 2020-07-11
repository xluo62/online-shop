import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';


const SignUp = () => {
   

    const [userCredentials, setUserCredentials] = useState({displayName: '', email: '', password: '', confirmPassword: ''});
    
    const handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = userCredentials;

        if(password !== confirmPassword ){
            alert("password don't match");
            return;
        }
        try{
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, { displayName });

            setUserCredentials({
                displayName:'',
                email: '',
                password: '',
                confirmPassword: ''
            });
        }catch (error){
            console.log("error occurd " , error.message);
            alert( error.message);
        }

    }
    
    const handleChange = event => {
        const { name, value } = event.target;

        setUserCredentials({...userCredentials, [name]: value },() => {console.log(userCredentials)});
    }

    
        //desturctring state
        const {displayName, email, password, confirmPassword} = userCredentials;
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span> Sign Up With Your Email And Password</span>
                <form onSubmit={ handleSubmit} className="sign-up-form">
                    <FormInput 
                    type='text'
                    name='displayName'
                    value={ displayName }
                    onChange={ handleChange }
                    label='Display Name'
                    required>
                    </FormInput>
                    <FormInput 
                    type='email'
                    name='email'
                    value={ email }
                    onChange={ handleChange }
                    label='Email'
                    required>
                    </FormInput>
                    <FormInput 
                    type='password'
                    name='password'
                    value={ password }
                    onChange={ handleChange }
                    label='Password'
                    required>
                    </FormInput>
                    <FormInput 
                    type='password'
                    name='confirmPassword'
                    value={ confirmPassword }
                    onChange={ handleChange }
                    label='Confirm Pasword'
                    required>
                    </FormInput>
                    <CustomButton type='submit' children='Sign Up'></CustomButton>
                </form>
            </div>
        );
    
}
export default SignUp;