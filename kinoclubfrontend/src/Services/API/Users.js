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

