import React from 'react';
import LoginForm from '../../Components/Forms/LoginForm'
import '../../Style/Common.css'
import { Image } from 'react-bootstrap'
import {Link} from 'react-router-dom'


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
            <br/>
            <Link className="Clickable" to={process.env.PUBLIC_URL + '/Register'} >Don't have an account yet? Sign up here!</Link>

        </div>)

    }

}
export default Login;
