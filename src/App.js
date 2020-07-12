import React, { useEffect } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import {  connect } from 'react-redux';

import HomePage from './pages/homepage/homepage.component';
import CheckoutPage from './pages/checkout/checkout.component';
import ShopPage from './pages/shoppage/shop.component';
import Header from './components/header/header.component';
import SignINAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { selectCurrentUser } from './redux/user/user.selector';
import { createStructuredSelector } from 'reselect';
import { checkUserSession } from './redux/user/user.actions';
//import { selectCollectionsPreview } from './redux/shop/shop.selector';
const App = (props) => {
  
  
  const { checkUserSession } = props;
  useEffect(() => {
    checkUserSession();
  },[checkUserSession]);
  //let unsubscribeFromAuth = null;

  // useEffect(() => {
  //   console.log('I have mounted');
  //   const { setCurrentUser} = props;
  //   unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
  //     if (userAuth){
  //       const userRef = await createUserProfileDocument(userAuth);
  //       //建立第二个subscription 这个链接是和具体的doc一一对应的
  //       userRef.onSnapshot(snapshot => {
  //         setCurrentUser(
  //           {
  //               id: snapshot.id,
  //               ...snapshot.data()
  //           });
  //       });
        
  //     }
  //     else{
  //       setCurrentUser(userAuth);
  //       console.log( `user: ${userAuth}` );
  //     }
  //     //addCollectionsAndDocuments('collections', 
  //     //collectionsArray.map(({title, items}) => ({ title, items })));
   
  //   })

  //   return () => {
  //     console.log(' Never have unmounted');
  //     unsubscribeFromAuth();
  //   }
  // }, []);
  

  
  
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
            render={() => props.currentUser ? 
            (<Redirect to='/'/>)
            :
            (<SignINAndSignUpPage/>)
            }>
          </Route>
        </Switch>
      </div>
    );
  
 
}

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  //collectionsArray: selectCollectionsPreview
})

export default  connect(mapStateToProps, mapDispatchToProps)(App) ;
