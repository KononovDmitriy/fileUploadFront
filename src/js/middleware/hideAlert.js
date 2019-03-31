import { IS_UPLOAD } from './../constants.js';
import { hideAlert } from './../ac/';

export default store => next => action => {
  const { type } = action;

  if (type !== IS_UPLOAD)
    return next(action)

  next(action);

  setTimeout(() => {
    next(hideAlert());
  }, 3000);
};
