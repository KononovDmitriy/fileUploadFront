import regeneratorRuntime from "regenerator-runtime";
import { fork } from 'redux-saga/effects';

import apiSaga from './apiSaga.js';
import alertSaga from './alertSaga.js';

export default function* rootSaga(dispatch) {
  yield fork(apiSaga, dispatch);
  yield fork(alertSaga);
}
