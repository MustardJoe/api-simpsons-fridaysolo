import QUERY from '../QUERY.js';
const URL = 'https://thesimpsonsquoteapi.glitch.me/quotes?count=20';

const quotesApi = {
    getQuotes(queryProps) {

        const query = QUERY.stringify(queryProps);
        const url = `${URL}?${query}`;

        return fetch(url)
            .then(response => response.json());
    }
};

export default quotesApi;