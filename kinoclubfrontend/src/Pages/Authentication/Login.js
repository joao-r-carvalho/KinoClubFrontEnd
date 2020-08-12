import React from 'react';
import LoginForm from '../Forms/LoginForm'
import '../../Style/Common.css'
import { Image } from 'react-bootstrap'

import Clacker from '../../Resources/clacker.png'
class Login extends React.Component {
    constructor(props) {

        super(props);
    }
    render() {
        return (<div className="LoginPage">
            <Image style={{ width: "20%" }} src={Clacker} fluid ></Image>
            <h2> Log into your KinoClub account!</h2>
            <br/>
            <LoginForm />
        </div>)

    }

}
export default Login;
