import { SERVER_API, UPLOAD_FILES, RESPONSE_SUCCESS, RESPONSE_ERROR} from './../constants.js';
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

    switch(status) {

      case RESPONSE_SUCCESS:
        next(uploadSuccess(imgUrl));
        break;

      case RESPONSE_ERROR:
         next(uploadEror());
         break;
    }
  })
  .catch((err) => {
    next(uploadEror());
  })

};
