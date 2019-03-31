import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducer';
// import isuploadMidl from '../middleware/temp.js';
import serverMidleware from '../middleware/server.js';
import hideAlertMidleware from '../middleware/hideAlert.js';

const enhancer = applyMiddleware(serverMidleware, hideAlertMidleware);

const store = createStore(reducer, {}, enhancer);

//dev only
window.store = store;

export default store;
