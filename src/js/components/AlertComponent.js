import React, { Component } from 'react';
import { connect } from 'react-redux';

import Alert from 'react-bootstrap/Alert'

import { hideAlert } from './../ac';

const Alerts = {
  SUCCESS: 'success',
  ERROR: 'danger'
}

const AlertsMsgs = {
  SUCCESS: 'Изображение успешно загружено!',
  ERROR: 'Ошибка при загрузке изображения!'
}

class AlertComponent extends Component {

  onCloseHandler = () => {
    this.props.hideAlert();
  }

  render() {
    const { show, error } = this.props;

    return (
      <Alert
        dismissible
        className="fixed-top w-75 mx-auto"
        variant={ (!error) ? Alerts.SUCCESS : Alerts.ERROR } show={ show }
        onClose={this.onCloseHandler}
      >
        <Alert.Heading>
          { (!error) ? AlertsMsgs.SUCCESS : AlertsMsgs.ERROR }
        </Alert.Heading>
      </Alert>
    );

  }
};

export default connect((store) => {
  return {
    show: store.alert.show,
    error: store.alert.error,
  };
}, { hideAlert })(AlertComponent);
