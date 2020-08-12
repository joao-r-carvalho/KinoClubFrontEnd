import React from 'react';
import { properties } from '../../Properties.js'
import { Form, Button } from 'react-bootstrap'

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: ''
            , password: ''
            , loginSuccessful: false
            , attemptedLogin: false
            , fullName: ""
        };

        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);

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
        }).then((response) => {
            if (response.status == 401) {
                this.setState({ loginSuccessful: false, attemptedLogin: true })
            }
            else {
                response.json()
                    .then(res => { this.setState({ loginSuccessful: true, fullName: res.Name, attemptedLogin: true }) }
                    );
            }

        });

        event.preventDefault();
    }

    render() {
        let error = this.state.attemptedLogin && !this.state.loginSuccessful;
        let form = <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    type="text"
                    name="username"
                    placeholder="Enter Username"
                    onChange={this.handleChange}
                    required
                    isInvalid={error} />

            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control color="red"
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    onChange={this.handleChange}
                    required
                    isInvalid={error} />
                <Form.Control.Feedback type="invalid"> Wrong credentials please try again </Form.Control.Feedback>
                <Form.Control.Feedback type="valid"> Logged in!</Form.Control.Feedback>

            </Form.Group>
            <Button variant="primary" type="submit">
                Login
    </Button>
        </Form>

        let success = <span style={{ color: "green" }}> Welcome {this.state.fullName}</span>
        return (
            this.state.loginSuccessful ? success : form 
 
        );
    }
};


export default LoginForm;
