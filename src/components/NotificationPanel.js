require('styles/bootstrap.css');
require('styles/bootstrap-theme.css');

import Alert from 'react-bootstrap/lib/Alert';
import React from 'react';


class AlertDismissable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            alertVisible: true
        }
    }

    render() {
        if (this.state.alertVisible) {
            return (
                <Alert bsStyle={this.props.alertType} onDismiss={this.handleAlertDismiss}>
                    {this.props.message}
                </Alert>
            );
        }

        return false;
    }

    handleAlertDismiss() {
        this.setState({alertVisible: false});
    }

    handleAlertShow() {
        this.setState({alertVisible: true});
    }
}

/**
 * Notification panel
 * @props alertType The type of alert (success, info, warning or danger)
 * @props message The message to render
 */
class NotificationPanel extends React.Component {

    render() {
        return (
            <AlertDismissable alertType={this.props.alertType} message={this.props.message}>
            </AlertDismissable>

        );
    }
}

export default NotificationPanel;



