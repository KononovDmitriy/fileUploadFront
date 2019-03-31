import { UPLOAD_FILES, IS_UPLOAD, HIDE_ALERT } from './../constants.js';

export function uploadFiles(file) {
  return {
    type: UPLOAD_FILES,
    payload: {
      file: file
    }
  };
};

export function isUpload(url, status, msg) {
  return {
    type: IS_UPLOAD,
    payload: {
      url,
      status,
      msg
    }
  };
};

export function hideAlert() {
  return {
    type: HIDE_ALERT,
  };
};
