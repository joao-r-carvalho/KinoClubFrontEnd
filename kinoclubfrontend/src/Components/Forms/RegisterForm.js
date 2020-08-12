import React from 'react'
import { properties } from '../../Properties.js'
import { Form, Button } from 'react-bootstrap'

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSubmit = (event) => {

        fetch(properties.BaseURL + '/Authentication/Register', {
            method: 'POST',
            credentials: 'include',

            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json',
            }, body: JSON.stringify({
                "Username": this.state.username,
                "Password": this.state.password,
                "FullName": this.state.FullName,
                "Email": this.state.Email

            })
        }).then((response) => {
            if (response.status == 401) {
                this.setState({ passwordFailed: true })
            } else if (response.state == 200) {
                this.setState({ loginSuccessful: true })

            }
        });

        event.preventDefault();
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="FullName" placeholder="Enter Name" onChange={this.handleChange} />
                </Form.Group>
                <Form.Group controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" name="username" placeholder="Enter Username" onChange={this.handleChange} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Enter Password" onChange={this.handleChange} />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Re-Enter Password" onChange={this.handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
        )
    }

}


export default RegisterForm