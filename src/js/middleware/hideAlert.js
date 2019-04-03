import { UPLOAD_SUCCESS, UPLOAD_ERROR } from './../constants.js';
import { hideAlert } from './../ac/';

export default store => next => action => {
  const { type } = action;

  if (type !== UPLOAD_SUCCESS && type !== UPLOAD_ERROR)
    return next(action)

  next(action);

  setTimeout(() => {
    next(hideAlert());
  }, 3000);
};
