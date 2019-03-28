import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

class UploadFormComponent extends Component {
  render() {
        return (
          <Form className="mt-3">

                <Form.Group controlId="form">
                  <Form.Label>Выберите файл</Form.Label>
                  <Form.Row>
                  <Col>
                    <Button variant="primary" type="submit">
                      Загрузить
                    </Button>
                  </Col>
                  <Col>
                    <Form.Control type="file" placeholder="Выберите файл" />
                  </Col>
                  </Form.Row>

                  </Form.Group>
          </Form>
        );
    }
}

export default UploadFormComponent;
