import React from 'react';
import { connect } from 'react-redux';

import Figure from 'react-bootstrap/Figure';

import { DEFAUL_IMG_URL } from './../constants.js';

const FLEX_INLINE_STYLE = {
  height: '500px',
  width: '600px'
};

const FIGURE_INLINE_STYLE = {
  width: '600px'
};

const IMG_INLINE_STYLE = {
  'object-fit': 'contain',
  height: '500px',
  width: '600px'
};

const ImgPreviewComponent = ({ imgUrl = DEFAUL_IMG_URL }) => {
  return (
      <Figure className="mx-auto d-block md-4" style={FIGURE_INLINE_STYLE}>
        <div
          className="d-flex flex-column justify-content-center"
          style={FLEX_INLINE_STYLE}>
            <Figure.Image src={imgUrl} style={ IMG_INLINE_STYLE } />
        </div>
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
