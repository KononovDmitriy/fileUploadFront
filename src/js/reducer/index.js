import {combineReducers} from 'redux';
import files from './files';
import alert from './alert';
import progressBar from './progressBar';

export default combineReducers({ files, alert, progressBar });
