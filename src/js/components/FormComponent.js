import React, { Component }  from 'react';
import { connect } from 'react-redux';

import UploadFormComponent from './UploadFormComponent.js';
import ProgressBarComponent from './ProgressBarComponent.js';

import { INPUT_FILE, FILE_TYPES, FILE_SIZE, VALIDITY_TYPES_MSG,
  VALIDITY_SIZE_MSG, VALIDITY_SELECT_MSG} from './../constants.js';

import { uploadFiles } from './../ac';
import { validationFiles } from './../tools.js';

import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay'
import Tooltip from 'react-bootstrap/Tooltip'

class FormComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        formValid: true,
        formValidMsg: '',
        target: undefined
      };

      this.attachRef = target => {
        this.setState({target});
      }

    }

  onSubmitHandler = (evt) => {
    evt.preventDefault();

    const files = evt.target.elements[INPUT_FILE].files;

    let validity = validationFiles(files);

    if (!validity.status) {
      this.setState(
        {
          formValid: false,
          formValidMsg: validity.msg
        }
      );

      return false;
    }

    this.setState({ formValid: true });
    this.props.uploadFiles(files);
    return true;
  }

  onChangeHandler = () => {
    this.setState({ 'formValid': true });
  }


  render() {
    const { formValid, formValidMsg, target } = this.state;

    return (
      <div className="w-50 mx-auto">

        {
          (!this.props.stateUpload) ?
              <UploadFormComponent
                ref = {this.attachRef}
                onSubmitHandler = { this.onSubmitHandler }
                onChangeHandler = { this.onChangeHandler }
                formValid = { this.state.formValid }
              /> :
            <ProgressBarComponent />
        }


        {
          (!formValid) ?
            <Overlay target={ target } show={true} placement="right">
              {props => (
                <Tooltip id="overlay-example" {...props}>
                  { formValidMsg }
                </Tooltip>
              )}
            </Overlay>
          : ''
        }
      </div>
    );
  }
};

export default connect((state) => {
  return {
    stateUpload: state.files.uploading
  };
}, { uploadFiles })(FormComponent);

