import { Record } from 'immutable';

import { UPLOAD_FILES } from './../constants.js';

const ImageRecord = Record({
    uploading: false,
    downloading: false,
    upload: false,
    download: false,
    url: undefined
  });

const defaultState = new ImageRecord();

export default ({imageState = defaultState}, action) => {
    console.log('REDUCER');
    console.dir(action);

  switch(action) {

    case UPLOAD_FILES:
      console.log('REDUCER UPLOAD_FILES');
      return imageState.setIn('uploading', true);
  }

  return imageState;
}
