import Component from './Component.js';

class Footer extends Component {
    renderTemplate() {
        return /*html*/`
        <div class="footer">
            This page uses data from 
            <a href="https://thesimpsonsquoteapi.glitch.me/" target="_blank">The Simpsons Quote API</a>
            <div>D'oh!</div>
        </div>
    `;
    }
}

export default Footer;