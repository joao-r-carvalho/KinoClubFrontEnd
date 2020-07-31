import React from 'react';
import  '../../Style/Common.css';
import Clock from '../Common/Clock.js';
import LoginWidget from './LoginWidget.js';
import {Link} from 'react-router-dom'

class TopBanner extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="TopBanner">
                
                <Clock />
                <Link to={process.env.PUBLIC_URL + '/'}>Home</Link>
                

                <h2 >Movie Presentation! </h2>


                <LoginWidget />


            </div>)

    }

}



export default TopBanner;