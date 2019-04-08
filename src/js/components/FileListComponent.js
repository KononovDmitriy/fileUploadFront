import React from 'react';
import { connect } from 'react-redux';

import ImgPreviewComponent from './ImgPreviewComponent.js'

const FileListComponent = ({ filesList = [] }) => {

  if (filesList.length === 0) return '';

  return (
    <div className="mt-4">
      {
        filesList.map((file) => {
          return <ImgPreviewComponent
            imgName={ file.name }
            imgUrl={ file.url }
            key = { file.name }
          />
        })
      }
    </div>
  );
};

export default connect((store) => {
  return {
    filesList: store.files.filesList
  };
})(FileListComponent);
// export default FileListComponent;
