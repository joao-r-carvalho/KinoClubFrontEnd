import { properties } from '../../Properties.js'
export function GetUserProfile() {

    return fetch(properties.BaseURL + '/Users/Me', {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json',
        }
    })

}

export function IsFavorite(MovieIdentifier) {

    return fetch(properties.BaseURL + '/Users/IsMovieFavorite/' + MovieIdentifier, {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json',
        }
    })
}
export function SetFavorite(MovieIdentifier) {
    return fetch(properties.BaseURL + '/' + properties.SetFavoriteMovieURL, {
        method: 'POST',
        credentials: 'include',

        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json',
        }, body: MovieIdentifier

    })
}

export function RemoveFavorite(MovieIdentifier) {
    return fetch(properties.BaseURL + '/' + properties.RemoveFavoriteMovieURL, {
        method: 'DELETE',
        credentials: 'include',

        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json',
        }, body: MovieIdentifier
    })
}



export function Logout() {
    return fetch(properties.BaseURL + '/' + properties.LogoutURL, {
        method: 'GET',
        credentials: 'include',

        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json',
        }
    })
}


