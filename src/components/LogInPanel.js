import React from 'react';

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
        component.setState({
            authenticationUrl: 'https://accounts.google.com/o/oauth2/auth?client_id=852815160721-odq9kl622hj1pkpa0acrbd2rsii9c59m.apps.googleusercontent.com&redirect_uri=http://localhost:8080/paloma&response_type=code&scope=https://www.googleapis.com/auth/userinfo.profile%20https://www.googleapis.com/auth/userinfo.email&state=google;-1784335051'
        });

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

