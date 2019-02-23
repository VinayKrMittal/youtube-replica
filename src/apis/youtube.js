import axios from 'axios';
const KEY = 'AIzaSyACetkQ6ZcVGXbjbY35DKZJ1J0BoGhHbHk';
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    },
})