import Component from './Component.js';
import Header from './Header.js';
import QuoteList from './QuoteList.js';
import Footer from './Footer.js';
import quotesApi from '../services/simpsons-api.js';
import hashStorage from '../hash-storage.js';

class App extends Component {
    render() {
        console.log('here in app.render');
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        const header = new Header();
        dom.insertBefore(header.render(), main);

        const quoteList = new QuoteList({ quotes: [] });
        main.appendChild(quoteList.render());

        // const queryProps = hashStorage.get();
        // API CALL occurs here
        quotesApi.getQuotes()
            .then(response => {
                let quotes = response;
                quoteList.update({ quotes });
            });

        const footer = new Footer();
        main.appendChild(footer.render());

        return dom;
    }
    
    renderTemplate() {
        return /*html*/`
        <div>
            <main>
            
            </main>
        </div>
    `;
    }
}

export default App;