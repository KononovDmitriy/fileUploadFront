import { Record } from 'immutable';

const ImageRecord = Record({
    uploading: false,
    downloading: false,
    upload: false,
    download: false,
    url: undefined
  });

const defaultState = new ImageRecord();

export default (imageState, action) => {
  return imageState = defaultState;
}
