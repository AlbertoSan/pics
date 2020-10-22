import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unplash.com',
    headers: {
        Authorization: 'Client-ID ZIF4EQjFDpkNimOlUPQ9MUzNhqyFuX_L7sUbr5bn16o'
    }
});