import React from 'react';

class LoadingWidget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dots: ""
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            300
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);

    }

    tick() {
        let NewDots = "";
        if(this.state.dots.length <= 3){
            NewDots = this.state.dots + ".";
        }
        this.setState({
            dots:NewDots
        });
    }

    render() {
        return (
            <span >Loading {this.state.dots} </span>
        )
    }
}
export default LoadingWidget;
