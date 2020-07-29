import React from 'react';
import Spoilers from '../../Resources/Spoilers.jpg'
import axios from 'axios';

class MoviePresentation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isImageHidden: true,
            error: null,
            isLoaded: false,
            MovieDescription: null,
            MovieTitle: null,
            MovieImageURL: null
        }
        this.ToggleImage = this.ToggleImage.bind(this);

    }
    componentDidMount() {
        axios.get("https://kinoclub-1595860726231.azurewebsites.net/Movies/Random")
            .then(res => {
                this.setState({
                    isLoaded: true,
                    MovieDescription: res.data.Description,
                    MovieTitle: res.data.Title,
                    MovieImageURL: res.data.Image,
                })
            }, (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })
            }
            )

    }
    ToggleImage() {
        this.setState(state => ({
            isImageHidden: !this.state.isImageHidden
        }));

    }
    render() {
        if (this.state.error) {
            return <div>Error: {this.state.error.message}</div>;
        } else if (!this.state.isLoaded) {
            return <div>Loading... </div>;
        } else {
            return (
                <div>

                    <table>
                        <tr>
                            <td>
                                <img src={this.state.isImageHidden ? Spoilers : this.state.MovieImageURL}
                                    onClick={this.ToggleImage} >

                                </img>
                            </td>
                            <td rowspan='3'>
                                <h1> {this.state.MovieTitle} </h1>
                                <p>{this.state.MovieDescription}</p>
                            </td>
                        </tr>
                    </table>
                </div>
            )
        }
    }
}


export default MoviePresentation;
