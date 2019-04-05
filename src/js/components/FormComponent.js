import React, { Component }  from 'react';
import { connect } from 'react-redux';

import UploadFormComponent from './UploadFormComponent.js';
import ProgressBarComponent from './ProgressBarComponent.js';

import { INPUT_FILE, FILE_TYPES, FILE_SIZE, VALIDITY_TYPES_MSG,
  VALIDITY_SIZE_MSG, VALIDITY_SELECT_MSG} from './../constants.js';

import { uploadFiles } from './../ac';

import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay'
import Tooltip from 'react-bootstrap/Tooltip'

const validityFile = (file) => {

};

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

    const file = evt.target.elements[INPUT_FILE].files;

    console.dir(file);

    if (!file.length) {
      this.setState(
        { formValid: false,
          formValidMsg: VALIDITY_SELECT_MSG
        });
      return false;
    }

    let fileType = file[0].type.split('/');
    fileType = fileType[1];

    // if (!FILE_TYPES.includes(fileType)) {
    //   this.setState(
    //     { formValid: false,
    //       formValidMsg: VALIDITY_TYPES_MSG
    //     });
    //   return false;
    // }

    if (file[0].size > FILE_SIZE) {
      this.setState(
        { formValid: false,
          formValidMsg: VALIDITY_SIZE_MSG
        });
      return false;
    }

    this.setState({ formValid: true });
    this.props.uploadFiles(file[0]);
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
    stateUpload: state.image.uploading
  };
}, { uploadFiles })(FormComponent);

