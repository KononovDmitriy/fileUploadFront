// AC
export const UPLOAD_FILES = 'UPLOAD_FILES';
export const UPLOAD_SUCCESS = 'UPLOAD_SUCCESS';
export const UPLOAD_ERROR = 'UPLOAD_ERROR';
export const HIDE_ALERT = 'HIDE_ALERT';
export const INPUT_FILE = 'inputFile';
export const UPDATE_PROGRESS = 'inputFile';
// OTHER
export const DEFAUL_IMG_URL = '/img/no-img.png';

//FOR REALEASE!!
// export const SERVER_DOMEN = ''

//DEV
export const SERVER_DOMEN = 'http://192.168.56.10/'

//FOR REALEASE!!
// export const SERVER_API = '/api/upload';

//DEV
export const SERVER_API = 'http://localhost:3000/api/upload';
// SERVER RESPONSES

export const RESPONSE_SUCCESS = 'SUCCESS';
export const RESPONSE_ERROR = 'ERROR';
// VALIDITY
// В байтах
export const FILE_SIZE = 209715200;
export const FILE_TYPES = ['jpeg', 'png', 'gif', 'bmp', ''];

export const VALIDITY_TYPES_MSG = 'Допустимые типы файлов: ' +
    FILE_TYPES.reduce((accumulator, currentValue) => {
      const tmp = `, ${currentValue}`;
      return accumulator + tmp;
    });

export const VALIDITY_SIZE_MSG =
  `Файл не должен превышать ${ FILE_SIZE / 1048576 } Мб`
export const VALIDITY_SELECT_MSG = `Выберите файл`
