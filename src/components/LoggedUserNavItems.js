import React from 'react';


class LoggedUserNavItems extends React.Component {
    render() {
        return (
            <ul className="nav navbar-nav">
                <li>
                    <a href="#">New profile</a>
                </li>
                <li>
                    <a href="#">Search</a>
                </li>
            </ul>
        );
    }
}

export default LoggedUserNavItems;
