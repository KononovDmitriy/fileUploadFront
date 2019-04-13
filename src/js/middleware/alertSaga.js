import { call, put, takeEvery } from 'redux-saga/effects';

import { UPLOAD_SUCCESS, UPLOAD_ERROR } from './../constants.js';
import { hideAlert } from './../ac/';

const alertSaga = function* (action) {
  yield new Promise((resolve) => {
    setTimeout(() => resolve(), 5000);
  });

  yield put(hideAlert());
};

export default function* watchAlertSaga () {
  yield takeEvery(UPLOAD_SUCCESS, alertSaga);
  yield takeEvery(UPLOAD_ERROR, alertSaga);
};
