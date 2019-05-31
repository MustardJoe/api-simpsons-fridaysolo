import Component from './Component.js';

class QuoteItem extends Component {
    
    
    renderTemplate() {
        return /*html*/`
            <li class="quote-item">
                <h1>Homer Simpson</h1>
                <img src="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939">
                <blockquote>
                    I believe the children are the future... Unless we stop them now!
                </blockquote>
            </li>
    `;
    }
}

export default QuoteItem;