import { SERVER_API, UPLOAD_FILES, SUCCESS, MSG_SUCCESS } from './../constants.js';
import { isUpload } from './../ac/';

export default store => next => action => {
  const { type, payload } = action;

  next(action);

  if (!type === UPLOAD_FILES)
    return false;

  const formData = new FormData();
      formData.append('img', payload.file);

  fetch(SERVER_API, {
    method: 'POST',
    body: formData
  })
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    const { message, status } = response;
    next(isUpload(message, status, MSG_SUCCESS));
  })
  .catch((err) => {

  })

};
