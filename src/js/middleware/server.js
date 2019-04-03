import { SERVER_API, UPLOAD_FILES, SUCCESS, MSG_SUCCESS } from './../constants.js';
import { isUpload, uploadSuccess, uploadEror } from './../ac/';

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
    const { imgUrl, status } = response;
    console.log('middleware uploadSuccess');
    next(uploadSuccess(imgUrl));
  })
  .catch((err) => {
    console.log('CATCH server!');
    console.log(err);
    next(uploadEror());
  })

};
