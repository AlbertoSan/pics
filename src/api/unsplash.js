import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unplash.com',
    headers: {
        Authorization: 'Client-ID ufhuehsfhesiufhseiufh'
    }
});