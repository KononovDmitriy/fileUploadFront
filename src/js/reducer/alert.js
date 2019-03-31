import { Record } from 'immutable';
import { IS_UPLOAD, HIDE_ALERT, RESPONSE_SUCCESS, RESPONSE_ERROR } from './../constants.js';

const AlertRecord = Record({
  alertError: false,
  alertMsg: 'Сообщение',
  alertShow: false
});

const isUploadShow = (alertState, payload) => {
  const { url, status, msg } = payload;

  let newState = alertState.set('alertMsg', msg);
  newState = newState.set('alertShow', true);

  switch(status) {
    case RESPONSE_SUCCESS:
      return newState.set('alertError', false);

    case RESPONSE_ERROR:
      return newState.set('alertShow', true);
  }
};

const defaultState = new AlertRecord();

export default (alertState = defaultState, action) => {
  const { type, payload } = action

  switch(type) {
    case IS_UPLOAD:
      let newState = isUploadShow(alertState, payload);
      return newState;

    case HIDE_ALERT:
      return alertState.set('alertShow', false);
  }

  return alertState;
};
