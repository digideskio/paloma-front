require('styles/bootstrap.css');
require('styles/bootstrap-theme.css');
require('styles/style.css');

import {Checkbox, FormGroup} from 'react-bootstrap';
import React from 'react';

class CheckBoxForm extends React.Component {

    static propTypes = {
        id: React.PropTypes.string.isRequired,
        listCheckBox: React.PropTypes.array.isRequired,
        onChange: React.PropTypes.func,
        validity: React.PropTypes.string.bool,
        inline: React.PropTypes.bool

    }

    static defaultProps = {
        inline: true
    };

    constructor(props) {
      super(props);
    }

    onChange(e) {
        if(this.props.onChange){
            this.props.onChange();
        }
    }

    makeListBox(list) {
        return list.map(function (item, i){
           return (<Checkbox key={'checkbox'+i} onChange={this.onChange} inline={this.props.inline}>{item}</Checkbox>);
       }.bind(this));
    }

    render() {
        return (
            <FormGroup controlId={'formCheckbox-' + this.props.id} validationState={this.props.validity}>
                {this.makeListBox(this.props.listCheckBox)}
            </FormGroup>
        );
    }
}

export default CheckBoxForm;
