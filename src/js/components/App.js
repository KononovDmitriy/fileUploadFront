import React from 'react';

import Container from 'react-bootstrap/Container';
import FormComponent from './FormComponent.js';
import AlertComponent from './AlertComponent.js';
import FileListComponent from './FileListComponent.js';

const App = () => {
    return (
        <Container className="mt-4">
          <AlertComponent />
          <FormComponent />
          <FileListComponent />
        </Container>
    );
}

export default App;
