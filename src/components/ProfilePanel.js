require('styles/bootstrap.css');
require('styles/bootstrap-theme.css');
require('styles/style.css');

import CreateProfilePanel from './CreateProfilePanel';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import React from 'react';

class ProfilePanel extends React.Component {
  constructor(props) {
      super(props);
  }
    createProfile() {
      return this.props.changeContextViewPanel(<CreateProfilePanel
        changeContextViewPanel={this.props.changeContextViewPanel.bind(this)} />);
    }
    render() {
        return (
            <Row>
                <Col mdOffset={2} md={4} className={'text-center'}>
                    <img className="img-rounded clickable" alt="Create profile"
                         src='images/user-add.png' onClick={this.createProfile.bind(this)}/>

                    <p>Create new profile</p>
                </Col>
                <Col mdOffset={2} md={4}>
                    <img className="img-rounded clickable" alt="Search profile"
                         src='images/user-search.png'/>

                    <p>Search profile</p>
                </Col>
            </Row>
        );
    }
}

export default ProfilePanel;
