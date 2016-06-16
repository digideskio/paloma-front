require('styles/bootstrap.css');
require('styles/bootstrap-theme.css');
require('styles/style.css');

import {Button} from 'react-bootstrap';
import React from 'react';

class CustomButton extends React.Component {

    static propTypes = {
        onChange: React.PropTypes.func.isRequired,
        label: React.PropTypes.string.isRequired,
        bsSize: React.PropTypes.string,
        isDisabled: React.PropTypes.bool,
        type: React.PropTypes.string

    }

    static defaultProps = {
        bsSize: 'large',
        type: 'button',
        isDisabled: true
    };

    constructor(props) {
      super(props);
    }

    render() {
        return (
            <Button bsSize={this.props.bsSize} type={this.props.type} disabled={this.props.isDisabled}>{this.props.label}</Button>
        );
    }
}

export default CustomButton;
