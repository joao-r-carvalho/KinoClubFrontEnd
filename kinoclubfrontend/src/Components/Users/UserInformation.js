import React from 'react'
import MovieList from '../Movies/MovieList'
import { GetUserProfile } from '../../Services/API/Users'
import LoadingWidget from '../Common/LoadingWidget'
import '../../Style/Common.css'

class UserInformation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            User: null
        }
    }

    componentDidMount() {
        GetUserProfile().then((response) => {
            if (response.status == 401) {
                this.setState({ User: "Please login first" });
            }
            else {
                response.json()
                    .then(res => {
                        this.setState({
                            User: res
                            , isLoaded: true
                        });
                    }
                    );
            }
        });

    }

    render() {


        return (
            <div>
                {this.state.isLoaded ? <div><table class="table table-striped">
                    <thead>
                        <tr>
                            <td colSpan="2" align="center">Profile Information:</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Username</th>
                            <td>{this.state.User.user.Username}</td>

                        </tr>
                        <tr>
                            <th scope="row">Fullname</th>
                            <td>{this.state.User.user.Name}</td>

                        </tr>
                        <tr>
                            <th scope="row">UserId</th>
                            <td>{this.state.User.user.UserId}</td>

                        </tr>
                        <tr>
                            <th scope="row">Gender</th>
                            <td>{this.state.User.user.Gender}</td>

                        </tr>
                    </tbody>
                </table>
                    <div className="FavoriteMovies">
                        <h1 align="center"> Favorite Movies </h1>

                        <MovieList MovieList={this.state.User.favoriteMovies} />
                    </div>
                </div>
                    : <LoadingWidget />}
            </div>
        )

    }

}

export default UserInformation; 