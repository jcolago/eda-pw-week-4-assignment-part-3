console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
const maxItems = 5


function addItem(itemInBasket) {
    if (basket.length <= maxItems){
    basket.push(itemInBasket);
    return true
    }
    return false    
}
console.log('The basket is ' + basket)
console.log('Added eggs', addItem('eggs'));
console.log('Added bacon', addItem('bacon'));
console.log('The basket is now ' + basket)

function listItems(basket){
        for (let i=0; i<basket.length; i++){
        console.log('Item in basket is:' + basket[i]);
    }
}    
console.log(listItems(basket));









// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
