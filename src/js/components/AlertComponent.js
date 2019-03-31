import React from 'react';
import { connect } from 'react-redux';

import Alert from 'react-bootstrap/Alert'

const Alerts = {
  SUCCESS: 'success',
  ERROR: 'danger'
}

const AlertsMsgs = {
  SUCCESS: 'Успех!',
  ERROR: 'Ошибка!'
}

const AlertComponent = ({ show, error, msg }) => {
  return (
      <Alert
        className="fixed-top"
        variant={ (!error) ? Alerts.SUCCESS : Alerts.ERROR } show={ show }
      >
        <Alert.Heading>
          { (!error) ? AlertsMsgs.SUCCESS : AlertsMsgs.ERROR }
        </Alert.Heading>
        <p>
          { msg }
        </p>
      </Alert>
    );
};

export default connect((store) => {
  return {
    show: store.alert.alertShow,
    error: store.alert.alertError,
    msg: store.alert.alertMsg
  };
})(AlertComponent);
