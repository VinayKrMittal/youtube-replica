import axios from 'axios';

export default axios.create({
    baseURL : 'https://api.unsplash.com',
    headers : {
        Authorization: 'Client-ID 29b844d4c96a1c3a477346f048543e1808dca901f31b52ee4be659b01d23b29a'
    }
})