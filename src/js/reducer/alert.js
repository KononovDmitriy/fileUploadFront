import { Record } from 'immutable';
import { UPLOAD_SUCCESS, UPLOAD_ERROR, HIDE_ALERT, RESPONSE_SUCCESS, RESPONSE_ERROR } from './../constants.js';

const AlertRecord = Record({
  error: false,
  show: false
});

const getSuccessState = (alertState) => {
  let newState = alertState.set('error', false);
  newState = newState.set('show', true);

  return newState;
};

const getErrorState = (alertState) => {
  let newState = alertState.set('error', true);
  newState = newState.set('show', true);

  return newState;
};

const defaultState = new AlertRecord();

export default (alertState = defaultState, action) => {
  const { type, payload } = action

  switch(type) {

    case UPLOAD_SUCCESS:
      return getSuccessState(alertState, payload);

    case UPLOAD_ERROR:
      return getErrorState(alertState);

    case HIDE_ALERT:
      return alertState.set('show', false);
  }

  return alertState;
};
