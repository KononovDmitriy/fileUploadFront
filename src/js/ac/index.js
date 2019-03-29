import { UPLOAD_FILES } from './../constants.js';

export function uploadFiles(file) {
  console.log('AC - uploadFiles');
  return {
    type: UPLOAD_FILES,
  };
};



