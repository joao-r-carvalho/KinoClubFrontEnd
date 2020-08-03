import React from 'react';
import  '../../Style/Common.css';
import Clock from '../Common/Clock.js';
import LoginWidget from './LoginWidget.js';
import {Link} from 'react-router-dom'
import Film from '../../Resources/film.svg'

class TopBanner extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="TopBanner">
                
                <Link className="Flex" to={process.env.PUBLIC_URL + '/'}><img className="HomeIcon" src={Film}></img></Link>
                



                <LoginWidget />


            </div>)

    }

}



export default TopBanner;