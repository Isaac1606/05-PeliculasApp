import axios from 'axios';

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '0833d93d928460f3be465288d1c4a64a',
        language: 'es-ES'
    }
});

export default movieDB;