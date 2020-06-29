import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
//what this does is it allows our browser to actually cache 
//out store now depending on certain configuration
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import rootReducer from './root-reducer';




const middlewares = [thunk];

if(process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
//using this and our store is how we will actually 
//create our new provider that's wrapping our application.
export const persistor = persistStore(store);
