require('styles/bootstrap.css');
require('styles/bootstrap-theme.css');
require('styles/style.css');

import {ControlLabel, FormControl, Col, Glyphicon} from 'react-bootstrap';
import React from 'react';

class FormText extends React.Component {

    static propTypes = {
        placeholder: React.PropTypes.string.isRequired,
        labelText: React.PropTypes.string.isRequired,
        id: React.PropTypes.string.isRequired,
        value: React.PropTypes.string,
        onChange: React.PropTypes.func,
        validity: React.PropTypes.string
    }

    constructor(props) {
      super(props);
    }

    onChange = (e) =>  {
        if(this.props.onChange){
            this.props.onChange(e, this.props.id);
        }
    }

    getGlyphicon = () => {
        if(this.props.validity !== undefined){
            let glyphName = this.props.validity === 'success' ? 'ok' : 'remove';
            return (<Glyphicon bsRole={'feedback'} glyph={glyphName} className='form-control-feedback' bsClass='glyphicon'/>);
        }
    }

    render() {
        return (
                <div className={'has-' + this.props.validity}>
                    <Col componentClass={ControlLabel} md={2}>
                        {this.props.labelText}
                    </Col>
                    <Col md={3}>
                        <FormControl
                            componentClass='input'
                            type='text'
                            placeholder={this.props.placeholder}
                            onChange={this.onChange}
                            value={this.props.text}
                        />
                        <FormControl.Feedback/>
                        {this.getGlyphicon()}
                    </Col>
                </div>
        );
    }
}

export default FormText;
