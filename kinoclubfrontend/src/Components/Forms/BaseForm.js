import React from 'react';



class Baseform extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            FormName:this.props.FormName
        }; 
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
}

export default Baseform;