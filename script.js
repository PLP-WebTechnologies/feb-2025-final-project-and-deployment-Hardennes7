let cart = [];

function addToCart(itemName, price) {
  cart.push({ itemName, price });
  updateCartCount();
  alert(`${itemName} added to cart.`);
}

function updateCartCount() {
  document.getElementById('cart-count').innerText = cart.length;
}

function toggleView(button) {
  const card = button.parentElement;
  const img = card.querySelector('img');
  if (button.innerText === 'View 3D') {
    img.src = 'images/3d-view.jpg'; // Replace with actual 3D image
    button.innerText = 'View 2D';
  } else {
    img.src = 'images/2d-view.jpg'; // Replace with actual 2D image
    button.innerText = 'View 3D';
  }
}

function displayCartItems() {
  const cartItemsSection = document.getElementById('cart-items');
  let total = 0;
  cartItemsSection.innerHTML = '';
  cart.forEach((item, index) => {
    total += item.price;
    const itemDiv = document.createElement('div');
    itemDiv.innerText = `${item.itemName} - Ksh ${item.price}`;
    cartItemsSection.appendChild(itemDiv);
  });
  document.getElementById('total-cost').innerText = total;
}

function payWithMpesa() {
  alert('Redirecting to M-Pesa payment gateway...');
}

// If on cart page, display cart items
if (document.getElementById('cart-items')) {
  displayCartItems();
}
