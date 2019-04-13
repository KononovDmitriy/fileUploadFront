import regeneratorRuntime from "regenerator-runtime";
import { fork } from 'redux-saga/effects';

import apiSaga from './apiSaga.js';
import alertSaga from './alertSaga.js';

export default function* rootSaga() {
  yield fork(apiSaga);
  yield fork(alertSaga);
}
