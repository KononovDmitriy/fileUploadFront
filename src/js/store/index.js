import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducer';
import serverMidleware from '../middleware/server.js';
import hideAlertMidleware from '../middleware/hideAlert.js';

const enhancer = applyMiddleware(serverMidleware, hideAlertMidleware);

const store = createStore(reducer, {}, enhancer);

window.store = store;

export default store;
