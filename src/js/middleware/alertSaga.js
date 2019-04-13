import { call, put, takeEvery } from 'redux-saga/effects';

import { UPLOAD_SUCCESS, UPLOAD_ERROR } from './../constants.js';
import { hideAlert } from './../ac/';

const alertSaga = function* (action) {
  // setTimeout(() => {
  //   (hideAlert());
  // }, 3000);
};

export default watchAlertSaga = function* () {
  yield takeEvery(UPLOAD_SUCCESS, alertSaga);
  yield takeEvery(UPLOAD_ERROR, alertSaga);
};
