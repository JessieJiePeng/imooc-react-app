//合并所有的reducers，并且返回
import { combineReducers } from 'redux';
import {user} from './redux/user.redux.js';

export default combineReducers({user}); 