import React from 'react';
import axios from 'axios';
import { properties } from '../../Properties.js'
import '../../Style/Common.css'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { IsFavorite, SetFavorite, RemoveFavorite } from '../../Services/API/Users'
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
            MovieIdentifier: this.props.MovieId,
            showFavoriteWidget: false,
            BlockFavoriteCalls: false,

        }
        this.ToggleFavoriteStatus = this.ToggleFavoriteStatus.bind(this);
        this.checkIfFavorite = this.checkIfFavorite.bind(this);

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
                //If movie ID was randomly generated this process must be done sequentially
                if (this.props.MovieId == "") {
                    this.checkIfFavorite(this.state.MovieIdentifier);

                }
            }, (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })
            }
            )
        if (this.props.MovieId != "") {
            this.checkIfFavorite(this.props.MovieId);
        }


    }

    checkIfFavorite(MovieIdentifier) {
        IsFavorite(MovieIdentifier)
            .then(response => {
                if (response.status == 200) {
                    this.setState({ showFavoriteWidget: true })
                    return response.json();
                } else {
                    this.setState({ IsFavorite: false, showFavoriteWidget: false })
                    return false;
                }
            }).then(json => {
                this.setState({ IsFavorite: json })
            }
            )
    }
    ToggleFavoriteStatus() {
        // alert((this.state.isFavorite? "Removing":  "Adding"  )+ this.state.MovieIdentifier +  " To your favorites") ;
        if (this.state.BlockFavoriteCalls) { return; }
        this.setState({ BlockFavoriteCalls: true });

        if (this.state.IsFavorite) {
            RemoveFavorite(this.state.MovieIdentifier)
                .then((response) => {
                    if (response.status == 200) {
                        this.setState({
                            IsFavorite: false,
                        })
                    } this.setState({ BlockFavoriteCalls: false });
                }
                );

        } else {
            SetFavorite(this.state.MovieIdentifier)
                .then((response) => {
                    if (response.status == 200) {
                        this.setState({
                            IsFavorite: true,
                        })
                    }
                    this.setState({ BlockFavoriteCalls: false });

                });
        }



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

                        <div hidden={!this.state.showFavoriteWidget} onClick={this.ToggleFavoriteStatus} className="AddToFavorites Clickable" >
                            {this.state.IsFavorite ?
                                <React.Fragment>
                                    <AiFillStar size={32} color="gold" />
                                    <span>Is favorite!</span>
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
