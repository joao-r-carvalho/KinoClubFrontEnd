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
            Name: "",
            isMale: true
        }
    }


    handleLogoutClick() {
        this.setState({
            isLoggedIn: false
        })
    }
    componentDidMount() {
        this.ProfilePooling();

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
                            this.setState({
                                isLoggedIn: true,
                                Name: res.user.Name
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
                <span>Welcome {this.state.Name} </span>
                <Link onClick={this.handleLogoutClick} to={process.env.PUBLIC_URL + '/KinoClubFrontEnd'} className="KinoButton KinoButton-Main" tag="button">Logout</Link>

            </div>;

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