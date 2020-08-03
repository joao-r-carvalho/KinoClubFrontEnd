import React from 'react';
import '../../Style/Common.css';
import Clock from './Clock';
class BottomBanner extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='BottomBanner'>
                <Clock id="BottomClock" />
            </div>)
    }

}
export default BottomBanner;