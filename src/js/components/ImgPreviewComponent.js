import React from 'react';
import { connect } from 'react-redux';

import Figure from 'react-bootstrap/Figure';

import { DEFAUL_IMG_URL } from './../constants.js';

const ImgPreviewComponent = ({ imgUrl = DEFAUL_IMG_URL }) => {
  return (
      <Figure>
        <Figure.Image
          width={300}
          height={300}
          alt=""
          src={imgUrl}
        />
        <Figure.Caption>
          Здесь отобразиться загруженная картинка
        </Figure.Caption>
      </Figure>
    );
};

export default connect((store) => {
  return {
    imgUrl: store.image.imgUrl
  }
})(ImgPreviewComponent);
