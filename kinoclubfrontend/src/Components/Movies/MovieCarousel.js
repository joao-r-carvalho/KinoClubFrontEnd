import React from 'react';
import axios from 'axios';
import { properties } from '../../Properties'
import '../../Style/Common.css'
class MovieCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            MovieList: [],
            FirstItem: 0,
            ToShow: 3,
            FilmsToFetch: 10
        }
        this.handleCarrouselShift = this.handleCarrouselShift.bind(this);
    }
    handleCarrouselShift(shift) {

        var Position = this.state.FirstItem + shift;
        if (Position < 0) {
            Position = this.state.MovieList.length - 1
        }
        Position = Position % this.state.MovieList.length;
        this.setState({
            FirstItem: Position
        })


    }

    componentDidMount() {
        var counter;
        axios.get(properties.BaseURL + "/Movies/All")
            .then(res => {

                this.setState({
                    MovieList: res.data.map(x => JSON.parse(x))
                })
            }, (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })
            }
            )
        this.setState({
            isLoaded: true
        })
    }
    render() {
        if (this.state.isLoaded) {
            var BegginingPosition = this.state.FirstItem;
            var FinalPosition = this.state.FirstItem + this.state.ToShow;
            var Overflow = (FinalPosition - this.state.MovieList.length);
            var MoviesToShow = this.state.MovieList.slice(BegginingPosition, Math.min(FinalPosition, this.state.MovieList.length));
            if (Overflow > 0) {
                MoviesToShow = MoviesToShow.concat(this.state.MovieList.slice(0, Overflow))
            }

            const innerDivs = MoviesToShow.map((Movie, index) =>
                <div key={index} className='MovieBox'>
                    <img className='MoviePoster' src={Movie.Image}></img>
                </div>

            )
            return <div className='Flex'>
                <button onClick={() => this.handleCarrouselShift(1)} className="KinoButton KinoButton-Main"></button>
                {innerDivs}
                <button onClick={() => this.handleCarrouselShift(-1)} className="KinoButton KinoButton-Main"></button>
            </div>


        } else {
            return (<h1>Loading</h1>)

        }
    }


}


export default MovieCarousel;