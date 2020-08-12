import React from 'react';
import { properties } from '../../Properties.js'
import { Form, Button } from 'react-bootstrap'

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
            , password: ''
            , passwordFailed: false
            , loginSuccessful: false,
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
                this.setState({ loginSuccessful: true })

            }
        });

        event.preventDefault();
    }

    render() {
        let error;

        error = <label color="red">{this.state.passwordFailed ? "Wrong password" : ""} </label>;


        return (

            <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" name="username" placeholder="Enter Username" onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Enter Password" onChange={this.handleChange} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                </Button>
            </Form>
        );
    }
};


export default LoginForm;
