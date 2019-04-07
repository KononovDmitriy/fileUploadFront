import React from 'react';

import Image from 'react-bootstrap/Image'

import { DEFAUL_IMG_URL } from './../constants.js';

const INLINE_STYLE_IMAGE = {
  width: '100px',
  height: '80px'
};

const INLINE_STYLE_TEXT = {
  verticalAlign: 'middle'
};


const ImgPreviewComponent = ({ imgName = '', imgUrl = DEFAUL_IMG_URL}) => {
  return (
    <div className="d-flex mb-4">
      <div>
        <Image src={imgUrl} style={INLINE_STYLE_IMAGE} />
      </div>
      <div className="ml-4" style={INLINE_STYLE_TEXT}>
        {imgName}
      </div>
    </div>
  );
};

export default ImgPreviewComponent;
