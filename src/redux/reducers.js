import {combineReducers} from 'redux';
import reposReducer from './repositorios/reducer';
import favoritosReducer from './favoritos/reducer';

export default combineReducers({reposReducer, favoritosReducer});
