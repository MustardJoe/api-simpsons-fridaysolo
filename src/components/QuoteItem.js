import Component from './Component.js';

class QuoteItem extends Component {
    
    
    renderTemplate() {
        const quote = this.props.quote;
        return /*html*/`
            <li class="quote-item">
                <h1>${quote.character}</h1>
                <img src="${quote.image}">
                <blockquote>
                    ${quote.quote}
                </blockquote>
            </li>
    `;
    }
}

export default QuoteItem;