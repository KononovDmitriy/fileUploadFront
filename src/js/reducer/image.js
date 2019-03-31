import { Record } from 'immutable';

import { UPLOAD_FILES, IS_UPLOAD, HIDE_ALERT, RESPONSE_SUCCESS, RESPONSE_ERROR,
  DEFAUL_IMG_URL, SERVER_DOMEN } from './../constants.js';

const drawImage = (imageState, payload) => {
  const {url, status, msg } = payload;

  let newState = imageState.set('uploading', false);
  // newState = newState.set('imgUrl', url);

  switch(status) {
    case RESPONSE_SUCCESS:
      return newState.set('imgUrl', SERVER_DOMEN + url);
    case RESPONSE_ERROR:
      return newState.set('imgUrl', DEFAUL_IMG_URL);
  }
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

    case IS_UPLOAD:
      return drawImage(imageState, payload);
  }
  return imageState;

}
