function addToCart() {
  const item = this.previousElementSibling.previousElementSibling.innerHTML;
  const price = Number(this.previousElementSibling.innerHTML.slice(1));
  const cartTotal = document.getElementById('cart-item-count');
  cartTotal.innerHTML = `(${Number(cartTotal.innerHTML.match(/\d+/)[0]) + 1})`;
  const newCartItem = document.createElement('li');
  document.getElementById('cart-items').append(newCartItem);
  newCartItem.outerHTML = `<li class="cart-item flex flex-row-between"><span class="cart-item-name">${item}</span><span class="cart-item-price">$${price}</span></li>`;
  const totalElement = document.getElementById('cart-total');
  const newTotal = fixTotalNumber(Number(totalElement.innerHTML.match(/\$(.+)/)[1]) + price);
  totalElement.innerHTML = `Total: $${newTotal}`;
}

function fixTotalNumber(total) {
  const cents = Math.round(total * 100);
  return cents / 100;
}
function clearCart() {
  document.getElementById('cart-item-count').innerHTML = '(0)';
  document.getElementById('cart-total').innerHTML = 'Total: $0.00';
  document.getElementById('cart-items').outerHTML = '<ul class="item-section" id="cart-items"></ul>';
}

function cartModal() {
  document.getElementById('cart-modal').setAttribute('open', '');
}

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
