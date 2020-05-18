import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle} from  '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email : '', paassword : '' });
    }
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value },() => {console.log(this.state)});
        
    }
    render(){
        return(
            <div className="sign-in">
                <h2>
                    I already have a account
                </h2>
                <span>
                    Sign In With Your Email And Password
                </span>
    
                <form onSubmit={this.handleSubmit} action="">
                    <FormInput 
                        handleChange={this.handleChange} 
                        name='email' value={this.state.email} 
                        label="email" 
                        type="email"
                    />
                    
                    <FormInput 
                        handleChange={this.handleChange} 
                        name='password' 
                        value={this.state.password} 
                        label="password" 
                        type="password"
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
                            onClick={signInWithGoogle}
                            children='Sign In With Google'
                        >
                        </CustomButton>
                    </div>
                    

                </form>
            </div>
        )
        
}

}
export default SignIn;