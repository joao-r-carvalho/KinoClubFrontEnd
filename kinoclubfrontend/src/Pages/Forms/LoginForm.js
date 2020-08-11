import React from 'react';
import { properties } from '../../Properties.js'
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
            , password: ''
            , passwordFailed: false
            , loginSuccessful : false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = (event) => {

        fetch(properties.BaseURL + '/Authentication/Login', {
            method: 'POST',
            credentials: 'include',

            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json',
            }, body: JSON.stringify({ "Username": this.state.username, "Password": this.state.password })
        }).then(function (response) {
            if (response.status == 401) {
                this.setState({ passwordFailed: true })
            } else if (response.state == 200) {
                loginSuccessful =true;
                
            }
        });

        event.preventDefault();
    }

    render() {
        let error;

        error = <label color="red">{this.state.passwordFailed ? "Wrong password" : ""} </label>;


        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Username:
            <input type="text" value={this.state.value} name="username" onChange={this.handleChange} />
                </label>
                <label>
                    Password:
            <input type="password" value={this.state.value} name="password" onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
                <br />
                {error}
            </form>
        );
    }
};


export default LoginForm;
