import axios from 'axios';
import { SERVER_API, UPLOAD_FILES, RESPONSE_SUCCESS, RESPONSE_ERROR} from './../constants.js';
import { isUpload, uploadSuccess, uploadEror, updateProgress } from './../ac/';

const getData = (fileList) => {
  const formData = new FormData();

  let index = 0;

  for (let el of fileList) {
    formData.append(index, el);
    index++;
  }

  return formData;
};

export default store => next => action => {
  next(action);

  const { type, payload } = action;

  if (type !== UPLOAD_FILES)
    return false;

  axios.post(SERVER_API, getData(payload.file), {
    onUploadProgress: (evt) => {
      console.dir(evt);
      const { total, loaded } = evt;
      console.log(`total = ${total}, loaded = ${loaded}`);
      next(updateProgress(total, loaded));
    }
  })
  .then((response) => {

      const { filesList, status } = response.data;

      switch(status) {
        case RESPONSE_SUCCESS:
          next(uploadSuccess(filesList));
          break;
        case RESPONSE_ERROR:
          console.log(error);
          next(uploadEror());
          break;
      }

  })
  .catch((error) => {
    console.log(error);
    next(uploadEror());
  });

};
