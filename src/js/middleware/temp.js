import { UPLOAD_FILES } from './../constants.js';
import { isUpload } from './../ac/';

export default store => next => action => {
  const { type } = action;

  if (type !== UPLOAD_FILES)
    return next(action)

  next(action);

  setTimeout(() => {
    next(isUpload());
  }, 1000);


};
