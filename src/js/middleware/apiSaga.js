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

const sendRequest = (payload, dispatch) => {
  return axios.post(
      SERVER_API,
      getData(payload.file),
      {
        onUploadProgress: (evt) => {
          const { total, loaded } = evt;
          dispatch(updateProgress(total, loaded));
        }
      }
    );
};


const apiSaga = function* (dispatch, action) {

  const { payload } = action;

  try {
    const response = yield call(sendRequest, payload, dispatch[0]);

    const { filesList, status } = response.data;

    switch(status) {
      case RESPONSE_SUCCESS:
        yield put(uploadSuccess(filesList));
        break;
      case RESPONSE_ERROR:
        yield put(uploadEror());
        break;
    }
  } catch {
    yield put(uploadEror());
  }
};




export default function* watchApiSaga (dispatch) {
  yield takeEvery(UPLOAD_FILES, apiSaga, dispatch);
}
