import Component from './Component.js';
import QuoteItem from './QuoteItem.js';


class QuoteList extends Component {

    render() {
        const list = this.renderDOM();

        this.props.quotes.forEach(quote => {
            const quoteItem = new QuoteItem({ quote });
            list.appendChild(quoteItem.render());
        });

        return list;
    }

    renderTemplate() {
        return /*html*/`
        <ul class="quote-list">
            
        </ul>
    `;
    }
}

export default QuoteList;