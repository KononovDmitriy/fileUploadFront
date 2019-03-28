import React from 'react';



import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import ImgPreviewComponent from './ImgPreviewComponent.js';
import UploadFormComponent from './UploadFormComponent.js';
import AlertComponent from './AlertComponent.js';
import SpinnerComponent from './SpinnerComponent.js';

const App = () => {
    return (
        <Container className="px-auto">
          <AlertComponent />
          <ImgPreviewComponent />
          <UploadFormComponent />
          <SpinnerComponent />
        </Container>
    );
}


export default App;
