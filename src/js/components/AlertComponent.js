import React from 'react';
import Alert from 'react-bootstrap/Alert'

const AlertComponent = () => {
  return (
      <Alert className="fixed-top" variant="success" show={false}>
        This is a alert—check it out!
      </Alert>
    );
};

export default AlertComponent;
