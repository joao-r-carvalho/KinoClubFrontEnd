import React from 'react'
import { properties } from '../../Properties';
import MoviePresentation from '../../Components/Movies/MoviePresentation';
class MovieHero extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
         return (
            
            <MoviePresentation MovieId={this.props.match.params.MovieId}/>
        )

    }

}

export default MovieHero; 