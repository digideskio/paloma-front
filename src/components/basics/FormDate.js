require('styles/bootstrap.css');
require('styles/bootstrap-theme.css');
require('styles/style.css');
require('react-datetime/css/react-datetime.css');

import DateTimeField from 'react-datetime';
import React from 'react';

class FormDate extends React.Component {

    static propTypes = {
        onChange: React.PropTypes.func.isRequired,
        value: React.PropTypes.instanceOf(Date),
        viewMode: React.PropTypes.string,
        dateFormat: React.PropTypes.string,
        timeFormat: React.PropTypes.bool

    }

    static defaultProps = {
        viewMode: 'days',
        timeFormat: 'false',
        dateFormat: 'DD/MM/YYYY'
    };

    constructor(props) {
      super(props);
    }

    /*onChange(e) {
        if(this.props.onChange){
            this.props.onChange();
        }
    }*/

    render() {
        return (
            <DateTimeField
                dateFormat={this.props.dateFormat}
                timeFormat={this.props.timeFormat}
                onChange={this.props.onChange}
                value={this.props.value}
                viewMode={this.props.viewMode}
            />
        );
    }
}

export default FormDate;
