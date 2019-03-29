import React, { Component }  from 'react';
import { connect } from 'react-redux';

import UploadFormComponent from './UploadFormComponent.js';
import SpinnerComponent from './SpinnerComponent.js';

import { uploadFiles } from './../ac';

class FormComponent extends Component {

  submitHandler(evt) {
    evt.preventDefault();
    console.dir(evt);
    uploadFiles();
  }

  render() {
    const { stateUpload } = this.props;

    return (
      <div className="pl-5">
        { (!stateUpload) ? <UploadFormComponent handler = { this.submitHandler } /> : <SpinnerComponent /> }
      </div>
    );
  }
};

export default connect((state) => {
  return {
    stateUpload: state.uploading
  };
}, { uploadFiles })(FormComponent);
