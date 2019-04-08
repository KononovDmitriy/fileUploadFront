import { FILE_TYPES, MAX_FILE_SIZE } from './constants.js';

const getFileType = (file) => {
  const fileType = file.type.split('/');
  return fileType[1];
};

const validationEptyFileList = (fileList) => {
  if (fileList.length === 0) {
    return {
      status: false,
      msg: 'Выберите файлы для загрузки'
    }
  }

    return { status: true }
};

const validationFileSize = (fileList) => {

  for (let file of fileList) {
    if (file.size > MAX_FILE_SIZE) {
      return {
        status: false,
        msg: `Файл: "${file.name}" превышает максимально допустимый размер:
        ${MAX_FILE_SIZE / 1048576 } МБ`
      };
    }
  }

  return { status: true };
};

const validationFileTypes = (fileList) => {

  for (let file of fileList) {
    if (!FILE_TYPES.includes(getFileType(file))){
      return {
        status: false,
        msg: `Файл: "${file.name}" не соответствует допустимым типам файлов:
        ${FILE_TYPES.join(', ')}`
      };
    }
  }

  return { status: true };
};


export const validationFiles = (fileList) => {

  let validity = validationEptyFileList(fileList);
  if (!validity.status) return validity;

  validity = validationFileTypes(fileList);
  if (!validity.status) return validity;

  return validationFileSize(fileList);;
};
