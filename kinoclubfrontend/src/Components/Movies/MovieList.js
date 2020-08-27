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
                        return (
                            <tr><Link to={process.env.PUBLIC_URL + '/MovieHero/' + item.MovieIdentifier}  ><td>
                                <img width="30%" src={item.Image} />

                            </td><td>{item.Title} </td></Link> </tr>);
                    })}
                </table>
            </div>
        )

    }

}

export default MovieList; 