import React from 'react';
import Clock from '../Common/Clock.js'
import Spoilers from '../../Resources/Spoilers.jpg'
class MoviePresentation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isImageHidden: true
        }
        this.ToggleImage = this.ToggleImage.bind(this);

    }

    ToggleImage() {
        this.setState(state => ({
            isImageHidden: !this.state.isImageHidden
        }));

    }
    render() {
        return (
            <div>
                <div>
                    <h1 >Movie Presentation! </h1>
                    <Clock />
                </div>
                <table>
                    <tr>
                        <td>
                            <img src={this.state.isImageHidden ? Spoilers : this.props.MoviePosterURL}
                                onClick={this.ToggleImage} >

                            </img>
                        </td>
                        <td rowspan='3'>
                            <h1> {this.props.MovieName} </h1>
                            <p>{this.props.MovieDescription}</p>
                        </td>
                    </tr>
                </table>
            </div>
        )

    }
}


export default MoviePresentation;
