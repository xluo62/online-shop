import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import {  connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import HomePage from './pages/homepage/homepage.component';
import CheckoutPage from './pages/checkout/checkout.component';
import ShopPage from './pages/shoppage/shop.component';
import Header from './components/header/header.component';
import SignINAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { selectCurrentUser } from './redux/user/user.selector';
import { createStructuredSelector } from 'reselect';

class App extends React.Component {
  
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        //建立第二个subscription 这个链接是和具体的doc一一对应的
        userRef.onSnapshot(snapshot => {
          setCurrentUser(
            {
                id: snapshot.id,
                ...snapshot.data()
            });
        });
        
      }
      
      else{
        setCurrentUser(userAuth);
        console.log( `user: ${userAuth}` );
      }
   
    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route  path='/shop' component={ShopPage}></Route>
          <Route exact path='/checkout' component={CheckoutPage}></Route>
          <Route 
            exact 
            path='/signin' 
            render={() => this.props.currentUser ? 
            (<Redirect tp='/'/>)
            :
            (<SignINAndSignUpPage/>)
            }>
          </Route>
        </Switch>
      </div>
    );
  }
 
}

const mapDispatchToProps = dispatch => (
  {
    setCurrentUser: user => dispatch(setCurrentUser(user))
  }
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

export default  connect(mapStateToProps, mapDispatchToProps)(App) ;
