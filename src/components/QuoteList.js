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
            <li class="quote-item">
                <h2>Homer Simpson</h2>
                <img src="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939">
                <blockquote>
                    I believe the children are the future... Unless we stop them now!
                </blockquote>
            </li>
        </ul>
    `;
    }
}

export default QuoteList;