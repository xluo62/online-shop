import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
//get local storage obj on our window browser
import storage from 'redux-persist/lib/storage';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';

//key: what point inside of our 
//reducer object do we want to start storing everything
//the only reducer i want to persist is cart; i.e white list

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}
const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer
});
//this will return back modified reducer with persistence capability
export default persistReducer(persistConfig, rootReducer);