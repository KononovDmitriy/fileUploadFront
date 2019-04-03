import React from 'react';

import Container from 'react-bootstrap/Container';
import ImgPreviewComponent from './ImgPreviewComponent.js';
import FormComponent from './FormComponent.js';
import AlertComponent from './AlertComponent.js';

const App = () => {
    return (
        <Container className="px-auto mt-4">
          <AlertComponent />
          <ImgPreviewComponent />
          <FormComponent />
        </Container>
    );
}

export default App;
