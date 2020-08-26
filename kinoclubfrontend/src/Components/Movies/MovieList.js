import React from 'react'
import { getNodeMajorVersion } from 'typescript';
import { Link } from 'react-router-dom'

class MovieList extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
                <table align="center" class="table">

                    {this.props.MovieList.map((item, index) => {
                        return (<Link to={process.env.PUBLIC_URL + '/MovieHero/' + item.MovieIdentifier}  >
                            <tr><td>
                                <img width="30%" src={item.Image} />

                            </td><td><Link> </Link>{item.Title} </td> </tr> </Link>);
                    })}
                </table>
            </div>
        )

    }

}

export default MovieList; 