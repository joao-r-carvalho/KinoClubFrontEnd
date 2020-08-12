import React from 'react';
import axios from 'axios';
import { properties } from '../../Properties.js'
import '../../Style/Common.css'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
class MoviePresentation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            MovieDescription: null,
            MovieTitle: null,
            MovieImageURL: null,
            IsFavorite: false,
            MovieIdentifier: this.props.MovieId
        }
        this.addToFavorites = this.addToFavorites.bind(this);

    }
    componentDidMount() {
        var AccessURL = properties.BaseURL + "/Movies/" + (this.props.MovieId == "" ? "Random" : this.props.MovieId);
        axios.get(AccessURL)
            .then(res => {
                this.setState({
                    isLoaded: true,
                    MovieDescription: res.data.Description,
                    MovieTitle: res.data.Title,
                    MovieImageURL: res.data.Image,
                    MovieIdentifier: res.data.MovieIdentifier
                })
            }, (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })
            }
            )

    }
    addToFavorites() {
        // alert((this.state.isFavorite? "Removing":  "Adding"  )+ this.state.MovieIdentifier +  " To your favorites") ;
        this.setState(state => ({
            IsFavorite: !this.state.IsFavorite
        }))

    }

    render() {

        if (this.state.error) {
            return <div>Error: {this.state.error.message}</div>;
        } else if (!this.state.isLoaded) {
            return <div>Loading... </div>;
        } else {
            return (
                <div className="MoviePresentationContainer">
                    <div className="MoviePresentationLeft">
                        <img src={this.state.MovieImageURL} >
                        </img>
                        <div onClick={this.addToFavorites} className="AddToFavorites Clickable" >
                            {this.state.IsFavorite ?
                                <React.Fragment>
                                    <AiFillStar size={32} color="gold" />
                                    <span>Favorited!</span>
                                </React.Fragment>
                                : <React.Fragment>
                                    <AiOutlineStar size={32} color="gold" />
                                    <span>Add to favorites</span>
                                </React.Fragment>}
                        </div>

                    </div>
                    <div className="MoviePresentationRight">
                        <h1> {this.state.MovieTitle} </h1>
                        <p>{this.state.MovieDescription}</p>
                    </div>
                </div>
            )
        }
    }
}


export default MoviePresentation;
