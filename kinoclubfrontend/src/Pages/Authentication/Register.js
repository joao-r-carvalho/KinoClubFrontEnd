import React from 'react';
import LoginForm from '../../Components/Forms/RegisterForm'
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
            <h2> Create your KinoClub account!</h2>
            <br/>
            <RegisterForm />
        </div>)

    }

}
export default Login;
