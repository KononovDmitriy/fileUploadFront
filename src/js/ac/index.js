import { UPLOAD_FILES, IS_UPLOAD, UPLOAD_SUCCESS,
  UPLOAD_ERROR, HIDE_ALERT, UPDATE_PROGRESS } from './../constants.js';

export function uploadFiles(file) {
  return {
    type: UPLOAD_FILES,
    payload: {
      file: file
    }
  };
};

export function updateProgress(total, loaded) {
  return {
    type: UPDATE_PROGRESS,
    payload: {
      total,
      loaded
    }
  };
};

export function uploadSuccess(url) {
  return {
    type: UPLOAD_SUCCESS,
    payload: {
      url,
    }
  };
};

export function uploadEror() {
  return {
    type: UPLOAD_ERROR,
  };
};

export function hideAlert() {
  return {
    type: HIDE_ALERT,
  };
};
