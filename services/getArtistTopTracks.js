/**
 * 
 * @param {String} token Bearer token  
 * @returns {Array<>} Tracks
 */

export const getArtistTopTracks = async (token) => {
    const url = 'https://api.spotify.com/v1/artists/6Ghvu1VvMGScGpOUJBAHNH/top-tracks?market=ES';

    const request = {
        method: 'GET',
        headers: {
            'Authorization': token
        }
    }

    const response = await fetch(url, request)
    const jsonResponse = await response.json()
    const artistTopTracks = jsonResponse.tracks

    return artistTopTracks;
}