import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
//what this does is it allows our browser to actually cache 
//out store now depending on certain configuration
import { persistStore } from 'redux-persist';
import rootReducer from './root-reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './root-saga';



const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if(process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

//using this and our store is how we will actually 
//create our new provider that's wrapping our application.
export const persistor = persistStore(store);
