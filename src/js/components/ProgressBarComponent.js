import React from 'react';
import { connect } from 'react-redux';
import ProgressBar from 'react-bootstrap/ProgressBar';

const ProgressBarComponent = ({ percent = 0}) => {
  return (
    <ProgressBar now={percent} />
  );
};

export default connect((store) => {
  return {
    percent: store.progressBar.percent
  }
})(ProgressBarComponent);

