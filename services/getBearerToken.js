export const gerBearerToken = async () => {
    const url = 'https://accounts.spotify.com/api/token'

    const grantType = 'grant_type=client_credentials';
    const clientId = 'client_id=fb63b09fc4c4483ca5d0660852c9eba1';
    const clientSecret = 'client_secret=47811dd2a1fb454391018cbcbe13a83e';

    const request = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `${grantType}&${clientId}&${clientSecret}`
    }

    const response = await fetch(url, request);
    const jsonResponse = await response.json();

    const bearerToken = jsonResponse.token_type + " " + jsonResponse.access_token;

    return bearerToken
}