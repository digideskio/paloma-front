require('normalize.css');
require('styles/App.css');
require('styles/bootstrap.css');
require('styles/bootstrap-theme.css');
var url = require('url');

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

//import request from 'request';
import React from 'react';
import LogInPanel from './LogInPanel';
import LoggedUserNavItems from './LoggedUserNavItems';
import NavBar from './NavBar';

class AppComponent extends React.Component {

    constructor(props) {
        super(props);
        var component = this;
        this.state = {
            authenticationPanel: <LogInPanel buildNotificationPanel={component.buildNotificationPanel}/>,
            loggedUserNavItems: '',
            notificationPanel : '',
            profilePanel: ''
        }
    }

    getUrlParam(requestUrl, param) {
    return url.parse(requestUrl, true).query.param;
    }

    logOut(event) {
        this.setState({
            user : undefined,
            authenticationPanel: <LogInPanel />,
            loggedUserNavItems: '',
            profilePanel: ''
        });
    }

    buildNotificationPanel(alertTypeParam, messageParam) {
        var component = this;
        component.setState({
            notificationPanel : <NotificationPanel alertType={alertTypeParam} message={messageParam} />
        })
    }

    componentDidMount(){
        var component = this;
        //request
        //    .get('http://jsonplaceholder.typicode.com/todos')
        //    .on('response', function(response) {
        //        console.log(response.statusCode)
        //        console.log(response.headers['content-type'])
        //    });
    }

    render() {
        return (
            <Grid className={'palomaContainer'} fluid={true}>
                <NavBar authenticationPanel={this.state.authenticationPanel}
                        loggedUserNavItems={this.state.loggedUserNavItems}/>
                <Row>
                    <Col mdOffset={1} md={10}></Col>
                </Row>
                <Row>
                    <Col mdOffset={4} md={4}>
                        {this.state.notificationPanel}
                    </Col>
                </Row>
                { this.state.profilePanel }
            </Grid>
        );
    }
}

AppComponent.defaultProps = {
};

export default AppComponent;
