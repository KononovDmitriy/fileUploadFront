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


      console.log(`total = ${total}, loaded = ${loaded}`);
      let ff = getPercent(total, loaded);
      console.log(ff);
      return progressState.set('percent', ff);

    case UPLOAD_SUCCESS:
      return progressState.set('percent', 0);
  }

  return progressState;
};
