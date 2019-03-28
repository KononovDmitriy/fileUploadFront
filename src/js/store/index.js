import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducer';
// import api from '../middlewares/api';

const enhancer = applyMiddleware();

const store = createStore(reducer, {}, enhancer);

//dev only
window.store = store;

export default store;
