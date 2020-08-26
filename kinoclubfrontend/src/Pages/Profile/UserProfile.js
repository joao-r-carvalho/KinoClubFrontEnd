import React from 'react'
import UserInformation from '../../Components/Users/UserInformation';
import MovieList from '../../Components/Movies/MovieList';

class UserProfile extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <UserInformation />
                <MovieList/>
            </div>
        )

    }

}

export default UserProfile; 