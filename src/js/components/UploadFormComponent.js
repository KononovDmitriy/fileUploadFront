import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { INPUT_FILE } from './../constants.js';

const UploadFormComponent = ({ formValid, handler }) => {

  return (
    <Form className="mt-3" onSubmit={ handler }>
      <Form.Group controlId="form">
        <Form.Label>Выберите файл</Form.Label>
        <Form.Control
          className={ (!formValid) ? 'border border-danger' : '' }
          name={ INPUT_FILE }
          type="file"
          placeholder="Выберите файл"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Загрузить
      </Button>
    </Form>
  );
}

export default UploadFormComponent;
