//import QUERY from '../QUERY.js';
const URL = 'https://thesimpsonsquoteapi.glitch.me/quotes?count=10';

const quotesApi = {
    getQuotes() {

        // const query = QUERY.stringify(queryProps);
        const url = `${URL}`;
        // const url = `${URL}?${query}`;

        return fetch(url)
            .then(response => response.json());
    }
};

export default quotesApi;