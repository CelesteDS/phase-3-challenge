/**
 * Adds an item to the shopping cart & updates cart totals.
 * (Callback function for 'Add to cart' buttons)
 */
function addToCart() {
  const itemName = this.previousElementSibling.previousElementSibling.innerHTML;
  const price = Number(this.previousElementSibling.innerHTML.slice(1));
  const newCartItem = document.createElement('li');
  document.getElementById('cart-items').append(newCartItem);
  newCartItem.outerHTML = `<li class="cart-item flex flex-row-between">
  <span>${itemName}</span><span>$${price}</span></li>`;

  // Increment cart item count.
  const itemsInCart = document.getElementById('cart-item-count');
  itemsInCart.innerHTML = `(${Number(itemsInCart.innerHTML.match(/\d+/)[0]) + 1})`;

  // Add cost of item to cart total.
  const totalElement = document.getElementById('cart-total');
  const newTotal = fixTotalNumber(Number(totalElement.innerHTML.match(/\$(.+)/)[1]) + price);
  totalElement.innerHTML = `Total: $${newTotal}`;
}

/**
 * Helper function to format the total price and correct the strange floating point sums.
 * @param  {number} total - (eg 18.0999999999995)
 * @return {string} - total with exactly 2 digits after the decimal (eg 18.10)
 */
function fixTotalNumber(total) {
  const cents = Math.round(total * 100);
  const dollars =  cents / 100;
  if (cents % 100 === 0) {
    return String(dollars) + '.00';
  } else if (cents % 10 === 0) {
    return String(dollars) + '0';
  }
  return String(dollars);
}

/**
 * Clears all cart contents.
 * @return {undefined}
 */
function clearCart() {
  document.getElementById('cart-item-count').innerHTML = '(0)';
  document.getElementById('cart-total').innerHTML = 'Total: $0.00';
  document.getElementById('cart-items').outerHTML = '<ul class="item-section" id="cart-items"></ul>';
}

/**
 * Makes the cart visible.
 * @return {undefined}
 */
function cartModal() {
  document.getElementById('cart-modal').setAttribute('open', '');
}

/**
 * Removes the cart from view.
 * @return {undefined}
 */
function exitCart() {
  document.getElementById('cart-modal').removeAttribute('open');
}

const buttons = document.querySelectorAll('button');

buttons.forEach(function(button) {
  if (button.id === 'cart-button') {
    button.addEventListener('click', cartModal);
  } else if (button.id === 'clear-cart') {
    button.addEventListener('click', clearCart);
  } else if (button.id === 'exit-cart') {
    button.addEventListener('click', exitCart);
  } else {
    button.addEventListener('click', addToCart);
  }
});
