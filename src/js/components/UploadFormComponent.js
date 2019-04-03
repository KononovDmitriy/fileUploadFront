import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { INPUT_FILE } from './../constants.js';

const UploadFormComponent = React.forwardRef((props, ref) => (
    <Form className="mt-3" onSubmit={ props.onSubmitHandler }>
      <Form.Group controlId="form">
        <Form.Label>Выберите файл</Form.Label>
        <Form.Control
          className={ (!props.formValid) ? 'border border-danger' : '' }
          name={ INPUT_FILE }
          onChange = { props.onChangeHandler }
          type="file"
          placeholder="Выберите файл"
          ref={ref}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Загрузить
      </Button>
    </Form>
));

export default UploadFormComponent;
