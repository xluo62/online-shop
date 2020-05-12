import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shop.component';

function App() {
  return (
    <div>
      <Switch>
      <Route exact path='/' component={HomePage}></Route>
      <Route exact path='/shop/hats' component={ShopPage}></Route>
      </Switch>
    </div>
    
    
     
   
  );
}


export default App;
