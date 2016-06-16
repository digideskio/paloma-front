require('styles/bootstrap.css');
require('styles/bootstrap-theme.css');
require('styles/style.css');

import {ControlLabel, FormControl, FormGroup} from 'react-bootstrap';
import React from 'react';

class FormText extends React.Component {

    static propTypes = {
        placeholder: React.PropTypes.string.isRequired,
        labelText: React.PropTypes.string.isRequired,
        id: React.PropTypes.string.isRequired,
        value: React.PropTypes.string,
        onChange: React.PropTypes.func,
        onBlur: React.PropTypes.func,
        validity: React.PropTypes.string
    }

    constructor(props) {
      super(props);
    }

    onChange(e) {
        if(this.props.onChange){
            this.props.onChange();
        }
    }

    onBlur(e) {
        if(this.props.onChange){
            this.props.onChange();
        }
    }

    render() {
        return (
            <FormGroup controlId={'formText-' + this.props.id} validationState={this.props.validity}>
                <ControlLabel>{this.props.labelText}</ControlLabel>
                <FormControl
                    componentClass='input'
                    type='text'
                    placeholder={this.props.placeholder}
                    onChange={this.onChange}
                    onBlur={this.props.onBlur}
                    value={this.props.text}
                />
                <FormControl.Feedback />
            </FormGroup>
        );
    }
}

export default FormText;
