import {combineReducers} from 'redux';
import WhitelistReducer from './whitelist.reducer';

export default combineReducers({
    WhiteList: WhitelistReducer,
})