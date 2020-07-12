import React, { useState }from 'react';
import { connect } from 'react-redux';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';
const SignIn = ({googleSignInStart, emailSignInStart}) => {
    const [ userCredentials, setCredentials ] = useState({ email: '', password: ''});    

    
    const { email, password } = userCredentials;
   
    const handleSubmit = async event => {
        event.preventDefault();
        try{
            emailSignInStart(email, password);
            //this.setState({ email : '', password : '' });
            setCredentials({ email : '', password : '' });
        } catch(error){
            console.log(error);
        }
        
    }
   const handleChange = event => {
        const { name, value } = event.target;
        setCredentials({...userCredentials, [name]: value });
        
    }
        return(
            <div className="sign-in">
                <h2>
                    I already have a account
                </h2>
                <span>
                    Sign In With Your Email And Password
                </span>
    
                <form onSubmit={handleSubmit} >
                    <FormInput 
                        handleChange={handleChange} 
                        name='email' 
                        value={email}
                        label="email" 
                        type="email"
                        required
                    />
                    
                    <FormInput 
                        handleChange={handleChange} 
                        name='password' 
                        value={password} 
                        label="password" 
                        type="password"
                        required
                    />
                    <div className="buttons">
                        <CustomButton 
                            type='submit' 
                            value='Submit Form'
                            children='Sign In'
                        >
                        </CustomButton>
                        <CustomButton 
                            isGoogleSignIn
                            onClick={googleSignInStart}
                            children='Sign In With Google'
                            type='button'
                        >
                        </CustomButton>
                    </div>
                    

                </form>
            </div>
        )
        


}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email,
                                                                     password}))
})


export default connect(null, mapDispatchToProps)(SignIn);