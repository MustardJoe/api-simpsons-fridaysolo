import Component from './Component.js';

class Header extends Component {
    renderTemplate() {
        return /*html*/`
            <header>
                <h1><a href="./index.html">Jonny's Simpsons Quotes</a></h1>
            </header>
    `;
    }
}

export default Header;