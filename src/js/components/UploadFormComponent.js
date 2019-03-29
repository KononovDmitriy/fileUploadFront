import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const UploadFormComponent = ({ handler }) => {

  return (
    <Form className="mt-3" onSubmit={ handler }>
      <Form.Group controlId="form">
        <Form.Label>Выберите файл</Form.Label>
        <Form.Control type="file" placeholder="Выберите файл" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Загрузить
      </Button>
    </Form>
  );
}

export default UploadFormComponent;
