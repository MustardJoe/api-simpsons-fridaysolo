import QuoteItem from '../src/components/QuoteItem.js';

const test = QUnit.test; 
QUnit.module('create quote item');
    
test('create quote item DOM', assert => {
    //arrange
    const singleQuoteObject = {
        quote:	'I believe the children are the future... Unless we stop them now!',
        character:	'Homer Simpson',
        image:	'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939',
        characterDirection:	'Right',
    };
    
    //act
    const quoteItem = new QuoteItem({ singleQuoteObject });
    const rendered = quoteItem.renderTemplate();

    // const expected = /*html*/`
    //     <li class="quote-item">
    //         <h1>Homer Simpson</h1>
    //         <img src="https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png" alt="Bender">
    //         <blockquote>
    //             Bite my shiny metal ass.
    //         </blockquote>
    //     </li>
    // `;
    //console.log(expected);

    //assert
    assert.htmlEqual(rendered, /*html*/`
            <li class="quote-item">
                <h1>Homer Simpson</h1>
                <img src="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939">
                <blockquote>
                    I believe the children are the future... Unless we stop them now!
                </blockquote>
            </li>
    `);
});

