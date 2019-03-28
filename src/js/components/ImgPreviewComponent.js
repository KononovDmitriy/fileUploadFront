import React from 'react';
import Figure from 'react-bootstrap/Figure';

import { DEFAUL_IMG_URL } from './../constants.js';

const ImgPreviewComponent = ({ umgUrl = DEFAUL_IMG_URL }) => {
  return (
      <Figure>
        <Figure.Image
          width={300}
          height={300}
          alt=""
          src={umgUrl}
        />
        <Figure.Caption>
          Здесь отобразиться загруженная картинка
        </Figure.Caption>
      </Figure>
    );
};

export default ImgPreviewComponent;
