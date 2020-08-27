import { properties } from '../../Properties.js'

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