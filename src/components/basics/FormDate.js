require('styles/bootstrap.css');
require('styles/bootstrap-theme.css');
require('styles/style.css');
require('react-datetime/css/react-datetime.css');

import DateTimeField from 'react-datetime';
import {Col, ControlLabel, Glyphicon} from 'react-bootstrap';
import React from 'react';

class FormDate extends React.Component {

    static propTypes = {
        onChange: React.PropTypes.func.isRequired,
        value: React.PropTypes.instanceOf(Date),
        viewMode: React.PropTypes.string,
        dateFormat: React.PropTypes.string,
        timeFormat: React.PropTypes.bool,
        mandatory: React.PropTypes.bool,
        closeOnSelect: React.PropTypes.bool
    }

    static defaultProps = {
        viewMode: 'days',
        timeFormat: false,
        dateFormat: 'DD/MM/YYYY',
        closeOnSelect: true,
        mandatory: false
    };

    constructor(props) {
      super(props);
    }

    onChange = (e) =>  {
        if(this.props.onChange){
            this.props.onChange(e, this.props.id);
        }
    }

    getGlyphicon =() => {
        if(this.props.validity !== undefined){
            let glyphName = this.props.validity === 'success' ? 'ok' : 'remove';
            return (<Glyphicon bsRole={'feedback'} glyph={glyphName} className='form-control-feedback' bsClass='glyphicon'/>);
        }
    }

    render() {
        return (
            <div className={'has-' + this.props.validity}> {/*Hack for setting color , 'cause form layout are sh** */}
                <Col componentClass={ControlLabel} md={2}>
                    {this.props.labelText}
                </Col>
                <Col md={3}>
                    <DateTimeField
                        dateFormat={this.props.dateFormat}
                        timeFormat={this.props.timeFormat}
                        onChange={this.onChange}
                        value={this.props.value}
                        viewMode={this.props.viewMode}
                        closeOnSelect={this.props.closeOnSelect}
                    />
                    {this.getGlyphicon()}
                </Col>
            </div>
        );
    }
}

export default FormDate;
