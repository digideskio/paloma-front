require('styles/bootstrap.css');
require('styles/bootstrap-theme.css');
require('styles/style.css');


import React from 'react';
import request from 'superagent';
import _ from 'lodash';
import * as validators from '../../validators/validators';

import FormText from '../basics/FormText';
import FormDate from '../basics/FormDate';
import CustomButton from '../basics/CustomButton';
import {FormGroup, Col, Form} from 'react-bootstrap';
/**
* The profile creation panel
*/
class CreateProfilePanel extends React.Component{
  constructor (props) {
    super(props);
  }

  /**
  * Handle the profile submission
  */
  handleSubmit (e) {

    e.preventDefault();

    request
        .post('http://localhost:8080/paloma/contact')
        .set('Content-Type', 'application/json')
        .send(JSON.stringify(this.contact))
        .end(function (err, res) {

    });
    this.props.changeContextViewPanel(<ProfileListPanel/>);
  }

  onChangeSurname = (e) => {
    let isValid = validators.validateText(e.target.value);
    isValid = isValid ? 'success' : 'error';

    this.props.actions.isValidSurname(isValid);
  }

  onChangeName = (e) => {
    let isValid = validators.validateText(e.target.value);
    isValid = isValid ? 'success' : 'error';

    this.props.actions.isValidName(isValid);
  }

  onChangeMailPrivate = (e) => {
    let isValid = validators.validateMail(e.target.value);
    isValid = isValid ? 'success' : 'error';

    this.props.actions.isValidMailPrivate(isValid);

  }

  /*onChangeDate = (momentDate, id) => {
      let temp = this.state.validation;
      if(momentDate.isValid()) {
          temp[id]= 'success';
      }else {
          temp[id] = 'error';
      }
      this.setState({
          validation: temp,
          allValidated: this.checkAllValidatedState()
      });
  }*/

  render () {
    return (
      <Form horizontal>
        <FormGroup controlId={'formText-1'}>
            <FormText
                labelText={'Surname*'}
                placeholder={'MY SURNAME'}
                id={'surnameInput'}
                onChange={this.onChangeSurname}
                validity={this.props.validation.surname}
            />
            <FormText
                labelText={'Name*'}
                placeholder={'MY NAME'}
                id={'nameInput'}
                onChange={this.onChangeName}
                validity={this.props.validation.name}
            />
        </FormGroup>
        <FormGroup controlId={'formText-2'}>
            <FormText
                labelText={'Phone'}
                placeholder={'MY PHONE'}
                id={'phoneInput'}
            />
            <FormText
                labelText={'Address'}
                placeholder={'MY ADDRESS'}
                id={'addressInput'}
            />
        </FormGroup>
        <FormGroup controlId={'formText-3'}>
            <FormText
                labelText={'Mail (Private)*'}
                placeholder={'MY MAIL'}
                id={'mailInput'}
                onChange={this.onChangeMailPrivate}
                validity={this.props.validation.mailprivate}
            />
            <FormText
                labelText={'Zip Code'}
                placeholder={'MY ZIP CODE'}
                id={'nameInput'}
            />
        </FormGroup>
        <FormGroup controlId={'formText-3'}>
            <FormText
                labelText={'Mail (Pro)'}
                placeholder={'MY MAIL PRO'}
                id={'mailProInput'}
            />
            <FormText
                labelText={'City'}
                placeholder={'MY CITY'}
                id={'cityInput'}
            />
        </FormGroup>
        <FormGroup controlId={'formText-4'}>
            <FormDate
                id={'birthdateInput'}
                labelText={'Birthdate'}
                viewMode={'years'}
                onChange={this.onChangeDate}
            />
            <FormText
                labelText={'Country'}
                placeholder={'MY COUNTRY'}
                id={'countryInput'}
            />
        </FormGroup>
        <Col md={6} mdOffset={5}>
            <CustomButton
                label={'Create'}
                type={'submit'}
                isDisabled={!this.props.allValidated}
            />
        </Col>
      </Form>
    );
  }
}

export default CreateProfilePanel;
