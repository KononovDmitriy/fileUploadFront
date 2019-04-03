import React, { Component }  from 'react';
import { connect } from 'react-redux';

import UploadFormComponent from './UploadFormComponent.js';
import SpinnerComponent from './SpinnerComponent.js';

import { INPUT_FILE } from './../constants.js';

import { uploadFiles } from './../ac';

class FormComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {formValid: true};
    }

  submitHandler = (evt) => {
    evt.preventDefault();

    const file = evt.target.elements[INPUT_FILE].files;

    if (!file.length) {
      this.setState({ formValid: false });
      return false;
    }

    this.setState({ formValid: true });
    this.props.uploadFiles(file[0]);
    return true;

  }

  render() {
    const { stateUpload } = this.props;

    return (
      <div className="w-25 mx-auto">
        { (!stateUpload) ? <UploadFormComponent
          handler = { this.submitHandler }
          formValid = { this.state.formValid }
      /> : <SpinnerComponent /> }
      </div>
    );
  }
};

export default connect((state) => {
  return {
    stateUpload: state.image.uploading
  };
}, { uploadFiles })(FormComponent);
