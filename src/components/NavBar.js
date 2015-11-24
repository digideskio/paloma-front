import React from 'react';

class NavBar extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li>
                                <a href="#">Home</a>
                            </li>
                        </ul>
                        {this.props.loggedUserNavItems}
                        {this.props.authenticationPanel}
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavBar;
