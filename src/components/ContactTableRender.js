require('styles/bootstrap.css');
require('styles/bootstrap-theme.css');
require('styles/style.css');

import React from 'react';

import Table from 'react-bootstrap/lib/Table';

class ContactTableRender extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return(
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Email</th>
            <th>Phone number</th>
          </tr>
        </thead>
        <tbody>
          {this.props.contacts.map(function (contact){
            return (
              <tr key={contact.id}>
                <td>{contact.firstName}</td>
                <td>{contact.lastName}</td>
                <td>{contact.email}</td>
                <td>{contact.phoneNumber}</td>
              </tr>
            );
          })}

        </tbody>

      </Table>
    );
  }
}


export default ContactTableRender;
