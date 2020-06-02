import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux'; 
// bring in new persistor as well as new component that will leverage inside of our application that will giave it the context of our new persisted reducer/
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';

ReactDOM.render(

  <Provider store={ store }>
    <BrowserRouter>
      {/* allows our application always have access to the persistence flow itself
      It will allow the persist gate to actually one receive the store but also fire
      off actions that will rehydrate the state whenever our application refreshes. */}
      <PersistGate persistor={persistor}>
      <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

