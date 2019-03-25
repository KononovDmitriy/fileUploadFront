import React, { Component } from 'react';
import Figure from 'react-bootstrap/Figure';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class App extends Component {

    render() {
        return (
        <div>
           <Figure>
              <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src="/img/1.jpeg"
              />
              <Figure.Caption>
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </Figure.Caption>
            </Figure>
            <Form>
                <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicChecbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
        </div>
        );
    }
};

export default App;
