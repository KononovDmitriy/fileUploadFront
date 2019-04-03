import { Record } from 'immutable';

import { UPLOAD_FILES, IS_UPLOAD, HIDE_ALERT, RESPONSE_SUCCESS, RESPONSE_ERROR,
  DEFAUL_IMG_URL, SERVER_DOMEN, UPLOAD_SUCCESS, UPLOAD_ERROR } from './../constants.js';

const getSuccessState = (imageState, payload) => {
  const { url, status } = payload;

  let newState = imageState.set('uploading', false);
  newState = newState.set('upload', true);
  newState = newState.set('imgUrl', SERVER_DOMEN + url);

  return newState;
};

const getErrorState = (imageState) => {
  let newState = imageState.set('uploading', false);
  newState = newState.set('upload', false);
  newState = newState.set('imgUrl', undefined);

  return newState;
};

const ImageRecord = Record({
  uploading: false,
  upload: false,
  imgUrl: undefined,
});

const defaultState = new ImageRecord();

export default (imageState = defaultState, action) => {
  const { type, payload } = action;

  switch(type) {

    case UPLOAD_FILES:
      return imageState.set('uploading', true);

    case UPLOAD_SUCCESS:
      return getSuccessState(imageState, payload);

    case UPLOAD_ERROR:
      return getErrorState(imageState);
  }
  return imageState;

}
