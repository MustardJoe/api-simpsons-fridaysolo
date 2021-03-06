import Component from './Component.js';

class QuoteItem extends Component {
    
    
    renderTemplate() {
        const quote = this.props.quote;
        return /*html*/`
            <li class="quote-item">
                <h2>${quote.character}</h2>
                <img src="${quote.image}">
                <blockquote class="quote-quote">
                    ${quote.quote}
                </blockquote>
            </li>
    `;
    }
}

export default QuoteItem;