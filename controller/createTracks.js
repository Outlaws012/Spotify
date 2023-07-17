import { preview } from "vite"

export const createTracks = (tracks) => {
    const tracksSection = document.querySelector('.tracks')

    tracks.map(track => {
        const trackCard =
            `
            <div class="track--card">
                <img src=${track.album.images[1].url} />
                <h4>${track.name}</h4>
                <audio src=${track.preview_url} controls></audio>
            <div/>
            `

        tracksSection.innerHTML += trackCard
    })
}