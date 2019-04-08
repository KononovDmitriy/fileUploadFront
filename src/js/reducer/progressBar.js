import { Record } from 'immutable';
import { UPDATE_PROGRESS, UPLOAD_SUCCESS } from './../constants.js';

const ProgressRecord = Record({
  percent: 0
});

const getPercent = (total, loaded) => {
  return loaded * 100 / total;
};

const defaultState = new ProgressRecord();

export default (progressState = defaultState, action) => {
  const { type, payload } = action;

  switch(type) {
    case UPDATE_PROGRESS:
      const { total, loaded } = payload;
      return progressState.set('percent', getPercent(total, loaded));

    case UPLOAD_SUCCESS:
      return progressState.set('percent', 0);
  }

  return progressState;
};
