import React from 'react';
import  '../../Style/Common.css';
import Clock from '../Common/Clock.js';
import LoginWidget from './LoginWidget.js';
class TopBanner extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="TopBanner">
                <Clock />

                <h2 >Movie Presentation! </h2>


                <LoginWidget />


            </div>)

    }

}



export default TopBanner;