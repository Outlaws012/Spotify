import './style.css'
import { gerBearerToken } from './services/getBearerToken.js'
import { getArtistTopTracks } from './services/getArtistTopTracks.js'
import { createTracks } from './controller/createTracks.js'

gerBearerToken().then((token) => {
  getArtistTopTracks(token).then((tracks) => {
    createTracks(tracks)
  })
})

document.querySelector('#app').innerHTML = `
  <div>
    <section class="tracks"> 

    </section>
  </div>
`

