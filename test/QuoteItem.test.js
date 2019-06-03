import QuoteItem from '../src/components/QuoteItem.js';

const test = QUnit.test; 
QUnit.module('create quote item');
    
test('create quote item DOM', assert => {
    //arrange
    const quote = {
        quote:	'I believe the children are the future... Unless we stop them now!',
        character:	'Homer Simpson',
        image:	'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939',
        characterDirection:	'Right',
    };
    
    //act
    const quoteItem = new QuoteItem({ quote });
    const rendered = quoteItem.renderTemplate();

    const expected = /*html*/`
        <li class="quote-item">
            <h2>Homer Simpson</h2>
            <img src="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939">
            <blockquote class="quote-quote">
                I believe the children are the future... Unless we stop them now!
            </blockquote>
        </li>
    `;

    //assert
    assert.htmlEqual(rendered, expected);
});

