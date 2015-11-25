import React from 'react';
import request from 'superagent';

class LogInPanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            authenticationUrl: ''
        }
    }

    componentDidMount() {
        var component = this;

/*        var handleError = function () {
            component.props.buildNotificationPanel('danger', 'Authentication from \
				Google is unavailable. Please try later or contact the administrator');
        }*/

        /**
         * Loading the user from Paloma WS
         */
        request
        .get("http://localhost:8080/paloma/authentication/url")
        .end(function(err, res) {
          
          component.setState({
              authenticationUrl: res.text
          });
        })


    }

    render() {
        return (
            <ul className="nav navbar-nav navbar-right">
                <li>
                    <a className="navbar-brand" href={this.state.authenticationUrl}>
                        <img
                            src={'http://www.registryvalet.com/graphics/icon_sm_google_plus.png'}/>
                    </a>
                </li>
            </ul>
        );
    }
}

export default LogInPanel;
