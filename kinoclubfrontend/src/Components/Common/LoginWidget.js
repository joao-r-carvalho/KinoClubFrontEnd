import React from 'react';
import '../../Style/Common.css';
import {Link} from 'react-router-dom'

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
    componentDidMount
    render() {
        let body;

        if (this.state.isLoggedIn) {
            body = <div><h2>Welcome {this.state.username}</h2>
                <button onClick={this.handleLogoutClick} className="KinoButton KinoButton-Secondary">Logout</button></div>;

        } else {
            body = <div>
                <Link to={process.env.PUBLIC_URL + '/Login'} className="KinoButton KinoButton-Main" tag="button">Login</Link>
                <Link to ={process.env.PUBLIC_URL + '/Register'} className="KinoButton KinoButton-Secondary">Register</Link></div>;
        }

        return (
            <div>
                {body}
            </div>

        )
    }

}

export default LoginWidget; 