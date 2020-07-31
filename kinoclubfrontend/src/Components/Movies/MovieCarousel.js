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
            Position = this.state.FilmsToFetch - 1
        }
        Position = Position % this.state.FilmsToFetch;
        this.setState({
            FirstItem: Position
        })


    }

    componentDidMount() {
        var counter;
        for (counter = 0; counter < this.state.FilmsToFetch; counter++) {

            axios.get(properties.BaseURL + "/Movies/Random")
                .then(res => {

                    this.setState({
                        MovieList: this.state.MovieList.concat(res.data)
                    })
                }, (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
                )

        }

        this.setState({
            isLoaded: true
        })
    }
    render() {
        if (this.state.isLoaded) {
            var BegginingPosition = this.state.FirstItem;
            var FinalPosition = this.state.FirstItem + this.state.ToShow ; 
            var Overflow = (FinalPosition - this.state.FilmsToFetch) ;
            var MoviesToShow = this.state.MovieList.slice(BegginingPosition, Math.min(FinalPosition, this.state.FilmsToFetch ) ) ;
            if(Overflow > 0){
                MoviesToShow = MoviesToShow.concat(this.state.MovieList.slice(0, Overflow))
            }
            
            const innerDivs = MoviesToShow.map((Movie, index) =>
                <div key={index} className='MovieBox'>
                    <img className='MoviePoster' src={Movie.Image}></img>
                </div>

            )
            return <div className='Flex'>
                <button onClick={() => this.handleCarrouselShift(-1)} className="KinoButton KinoButton-Main"></button>
                {innerDivs}
                <button onClick={() => this.handleCarrouselShift(1)} className="KinoButton KinoButton-Main"></button>
            </div>


        } else {
            return (<h1>Loading</h1>)

        }
    }


}


export default MovieCarousel;