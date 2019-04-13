import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import { SERVER_API, UPLOAD_FILES, RESPONSE_SUCCESS, RESPONSE_ERROR} from './../constants.js';
import { isUpload, uploadSuccess, uploadEror, updateProgress } from './../ac/';

const getData = (fileList) => {
  const formData = new FormData();

  let index = 0;

  for (let el of fileList) {
    formData.append(index, el);
    index++;
  }

  return formData;
};

const sendRequest = (payload) => {
  return axios.post(
      SERVER_API,
      getData(payload.file),
      {
        onUploadProgress: (evt) => {
          const { total, loaded } = evt;
          // next(updateProgress(total, loaded));
          console.log(`total = ${total}, loaded = ${loaded}`);
          put(updateProgress(total, loaded));
        }
      }
    );
};


const apiSaga = function* (action) {
  console.log('UPLOAD_FILES');

  const { payload } = action;

  try {
    const response = yield call(sendRequest, payload);

    console.log('responce');
    console.dir(response);

    const { filesList, status } = response.data;

    switch(status) {
      case RESPONSE_SUCCESS:

        console.log(RESPONSE_SUCCESS);

        yield put(uploadSuccess(filesList));
        break;
      case RESPONSE_ERROR:

        console.log(RESPONSE_ERROR);

        yield put(uploadEror());
        break;
    }
  } catch {
    yield put(uploadEror());
  }



};


export default function* watchApiSaga () {
  yield takeEvery(UPLOAD_FILES, apiSaga);
}
