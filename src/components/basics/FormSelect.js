require('styles/bootstrap.css');
require('styles/bootstrap-theme.css');
require('styles/style.css');

import {ControlLabel, FormControl, FormGroup} from 'react-bootstrap';
import React from 'react';

class FormSelect extends React.Component {

    static propTypes = {
        labelText: React.PropTypes.string.isRequired,
        id: React.PropTypes.string.isRequired,
        value: React.PropTypes.string,
        onChange: React.PropTypes.func,
        validity: React.PropTypes.string,
        listSelect: React.PropTypes.array
    }

    constructor(props) {
      super(props);
    }

    onChange(e) {
        if(this.props.onChange){
            this.props.onChange();
        }
    }

    makeListOptions(options) {
        return options.map(function (option, i){
           return (<option key={'option'+i} value={option.value}>{option.label}</option>);
       }.bind(this));
    }

    render() {
        return (
            <FormGroup controlId={'formSelect-' + this.props.id} validationState={this.props.validity}>
                <ControlLabel>{this.props.labelText}</ControlLabel>
                <FormControl componentClass='select' onChange={this.onChange} value={this.props.text}>
                    {this.makeListOptions(this.props.listSelect)}
                </FormControl>
            </FormGroup>
        );
    }
}

export default FormSelect;
