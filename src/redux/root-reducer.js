import { combineRudecers } from 'redux';
import userReducer from './user/user.reducer';

export default combineRudecers({
    user: userReducer
});