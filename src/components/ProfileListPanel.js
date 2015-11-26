require('styles/bootstrap.css');
require('styles/bootstrap-theme.css');
require('styles/style.css');

import ContactTableRender from './ContactTableRender';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import React from 'react';
import request from 'superagent';

class ProfileListPanel extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        contacts : []
      };
  }
    componentDidMount() {
      var component = this;
      request
      .get("http://localhost:8080/paloma/contact")
      .accept('json')
      .end(function (err, res) {
        component.setState({
          contacts : res
        });
        console.log(res);
      });

    }
    render() {
        return (
            <Row>
                <Col mdOffset={2} md={8}>
                      <ContactTableRender contacts={this.state.contacts}/>
                </Col>
            </Row>
        );
    }
}

export default ProfileListPanel;
