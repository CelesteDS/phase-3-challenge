function addToCart() {
  const item = this.previousElementSibling.previousElementSibling.innerHTML;
  const price = Number(this.previousElementSibling.innerHTML.slice(1));
  const cartTotal = document.getElementById('cart-item-count')
  cartTotal.innerHTML = `(${Number(cartTotal.innerHTML.match(/\d+/)[0]) + 1})`
}

function clearCart() {
  document.getElementById('cart-item-count').innerHTML = '(0)';
}

function cartModal() {
  // figure out how to make a modal
}
const buttons = document.querySelectorAll('button');

buttons.forEach(function(button) {
  button.addEventListener('click', addToCart);
});

// document.getElementById('cart-button').addEventListener('click', cartModal, opts)
// add another listener for the button w id cart-button
// that prevents defaul behavior and just runs funct to open
// modal
//
// and another one for the clear button in the cart modal
