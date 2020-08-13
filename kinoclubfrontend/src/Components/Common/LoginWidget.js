import React from 'react';
import '../../Style/Common.css';
import { Link } from 'react-router-dom'
import { properties } from '../../Properties.js'
import { FcBusinessman, FcBusinesswoman } from 'react-icons/fc'
import axios from 'axios'

class LoginWidget extends React.Component {
    constructor(props) {
        super(props);

        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {
            isLoggedIn: false,
            isLoaded: false,
            isMale: true
        }
    }


    handleLogoutClick() {
        this.setState({
            isLoggedIn: false
        })
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.ProfilePooling(),
            5000
        );

    }
    ProfilePooling = () => {
        if (!this.state.isLoggedIn) {
            fetch(properties.BaseURL + '/Users/Me', {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Accept': '*/*',
                    'Content-Type': 'application/json',
                }
            }).then((response) => {
                if (response.status == 401) {
                    this.setState({ isLoggedIn: false })
                }
                else {
                    response.json()
                        .then(res => {
                            alert(JSON.stringify(res));

                            this.setState({
                                isLoggedIn: true
                            });
                            this.timerID = null;
                        }
                        );
                }
                this.setState({
                    isLoaded: true
                })

            });

        }

    }




    render() {
        let body;

        if (this.state.isLoggedIn) {
            body = <div>
                {this.state.isMale ? <FcBusinessman size={48}> </FcBusinessman>
                    : <FcBusinesswoman size={48}> </FcBusinesswoman>
                }
                <span>Logged in as : </span>
                <button onClick={this.handleLogoutClick} className="KinoButton KinoButton-Secondary">Logout</button></div>;

        } else {
            body = <div>
                <Link to={process.env.PUBLIC_URL + '/Login'} className="KinoButton KinoButton-Main" tag="button">Login</Link>
                <Link to={process.env.PUBLIC_URL + '/Register'} className="KinoButton KinoButton-Secondary">Register</Link></div>;
        }

        return (
            <div>
                {body}
            </div>

        )
    }

}

export default LoginWidget; 