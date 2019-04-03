import React from 'react';
import { connect } from 'react-redux';

import Alert from 'react-bootstrap/Alert'

const Alerts = {
  SUCCESS: 'success',
  ERROR: 'danger'
}

const AlertsMsgs = {
  SUCCESS: 'Изображение успешно загружено!',
  ERROR: 'Ошибка при загрузке изображения!'
}

const AlertComponent = ({ show, error }) => {
  return (
      <Alert
        className="fixed-top"
        variant={ (!error) ? Alerts.SUCCESS : Alerts.ERROR } show={ show }
      >
        <Alert.Heading>
          { (!error) ? AlertsMsgs.SUCCESS : AlertsMsgs.ERROR }
        </Alert.Heading>
      </Alert>
    );
};

export default connect((store) => {
  return {
    show: store.alert.show,
    error: store.alert.error,
  };
})(AlertComponent);
