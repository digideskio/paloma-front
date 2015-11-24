import React from 'react';

class LogOutPanel extends React.Component {

    render() {
        return (
            <ul className="nav navbar-nav navbar-right">
                <li>
                    <p className="navbar-text">Hello {this.props.user.firstName}</p>
                </li>
                <li>
                    <p id="logOut" className="navbar-text clickable" onClick={this.props.logOut}>Log out</p>
                </li>
            </ul>
        )
    }

}

export default LogOutPanel;
