import Component from './Component.js';

class Footer extends Component {
    renderTemplate() {
        return /*html*/`
        <div>
            This page uses
            <a href="https://thesimpsonsquoteapi.glitch.me/">The Simpsons Quote API</a>
        </div>
    `;
    }
}

export default Footer;