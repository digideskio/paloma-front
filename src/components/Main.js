require('normalize.css');
require('styles/App.css');
require('styles/bootstrap.css');
require('styles/bootstrap-theme.css');
var url = require('url');


import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import request from 'superagent';
import React from 'react';
import LogInPanel from './LogInPanel';
import LogOutPanel from './LogOutPanel';
import LoggedUserNavItems from './LoggedUserNavItems';
import ProfilePanel from './ProfilePanel';
import NavBar from './NavBar';

class AppComponent extends React.Component {

    constructor(props) {
        super(props);
        var component = this;
        this.state = {
            authenticationPanel: <LogInPanel buildNotificationPanel={component.buildNotificationPanel}/>,
            loggedUserNavItems: '',
            notificationPanel : '',
            currentContextView: '',
            logOut: '',
            user: {}
        }
    }

    getUrlParam(requestUrl, param) {
      return url.parse(requestUrl, true).query[param];
    }

    logOut(event) {
        this.setState({
            user : null,
            authenticationPanel: <LogInPanel />,
            loggedUserNavItems: '',
            profilePanel: '',
            currentContextView: ''
        });
        sessionStorage.removeItem("user");
    }

    buildNotificationPanel(alertTypeParam, messageParam) {
        var component = this;
        component.setState({
            notificationPanel : <NotificationPanel alertType={alertTypeParam} message={messageParam} />
        })
    }

    /**
  	* Change the current context view
  	*/
  	changeContextViewPanel(context) {
  		this.setState({
  			currentContextView : context
  		})
  	}

    componentWillMount(){
        var component = this;
        var code = component.getUrlParam(window.location.href, 'code');
        if(!!code || sessionStorage.getItem("user") != null) {
          if(sessionStorage.getItem("user") == null) {
            request
            .get("http://localhost:8080/paloma/authentication?code=" + code)
            .set('Content-Type', 'application/json')
            .end(function (err, res) {
                component.setState({
                  user : res.body,
                  loggedUserNavItems : <LoggedUserNavItems/>,
                  authenticationPanel : <LogOutPanel user={res.body}
                  logOut={component.logOut.bind(component)}/>,
                  currentContextView : <ProfilePanel
                  changeContextViewPanel={component.changeContextViewPanel.bind(component)} />
                });
                console.log(component.state.user);
            });
          }
        }
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
                { this.state.currentContextView }
            </Grid>
        );
    }
}

AppComponent.defaultProps = {
};

export default AppComponent;
