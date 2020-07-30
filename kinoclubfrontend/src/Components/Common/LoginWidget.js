import React from 'react';
import '../../Style/Common.css';

class LoginWidget extends React.Component {
    constructor(props) {
        super(props);

        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {
            isLoggedIn: false,
            username: "João Carvalho"
        }
    }
    handleLoginClick() {

        this.setState({ isLoggedIn: true });
    }
    handleLogoutClick() {
        this.setState ({
            isLoggedIn: false
        })
    }
    render() {
        let body;

        if (this.state.isLoggedIn) {
            body = <div><h2>Welcome {this.state.username}</h2>
                <button onClick={this.handleLogoutClick} className="KinoButton KinoButton-Secondary">Logout</button></div>;

        } else {
            body = <div><button onClick={this.handleLoginClick} className="KinoButton KinoButton-Main">Login</button>
                <button className="KinoButton KinoButton-Secondary">Signup</button></div>;

        }

        return (
            <div>
                {body}
            </div>

        )
    }

}

export default LoginWidget; 