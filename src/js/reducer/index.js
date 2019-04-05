import {combineReducers} from 'redux';
import image from './image';
import alert from './alert';
import progressBar from './progressBar';

export default combineReducers({ image, alert, progressBar });
