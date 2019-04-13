import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducer';

import sagaRoot from '../middleware/';

import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const enhancer = applyMiddleware(sagaMiddleware);

const store = createStore(reducer, {}, enhancer);

sagaMiddleware.run(sagaRoot, [store.dispatch]);

window.store = store;

export default store;
