import Component from './Component.js';
import Header from './Header.js';
import Footer from './Footer.js';

class App extends Component {
    render() {
        console.log('here in app.render');
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        const header = new Header();
        dom.insertBefore(header.render(), main);

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