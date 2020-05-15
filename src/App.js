import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shop.component';
import Header from './components/header/header.component';
import SignINAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
function App() {
  return (
    <div>
      <Header/>
      <Switch>
      <Route exact path='/' component={HomePage}></Route>
      <Route exact path='/shop/hats' component={ShopPage}></Route>
      <Route exact path='/signin' component={SignINAndSignUpPage}></Route>
      </Switch>
    </div>
  );
}


export default App;
