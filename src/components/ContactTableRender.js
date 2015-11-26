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
      <Table responsive>
        <tbody>
          <tr>
            <td>Nous voilà</td>
          </tr>
        </tbody>

      </Table>
    );
  }
}


export default ContactTableRender;
