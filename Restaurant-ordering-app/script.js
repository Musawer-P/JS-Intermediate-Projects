const addButtons = document.querySelectorAll('#add');
const cartDiv = document.querySelector('.cart');
const cartItemsContainer = cartDiv.querySelector('.cart-items');
const totalAmount = document.getElementById('total-item');
const checkoutBtn = document.getElementById('cart-btn');
const closeBtn = document.getElementById('close-btn');
const cardDetailsDiv = document.querySelector('.card-details');
const payBtn = document.getElementById('card-btn');
const thankYouDiv = document.querySelector('.compeleting-message');
const thankYouText = document.getElementById('compeleting-message');

let cart = [];

// Get item details
function getItemDetails(button) {
    const itemDiv = button.closest('.div-1');
    const name = itemDiv.querySelector('#h2-p-name').textContent.trim();
    const price = parseFloat(itemDiv.querySelector('#p-price').textContent.replace('$', ''));
    return { name, price };
}

// Add to cart
addButtons.forEach(button => {
    button.addEventListener('click', () => {
        const item = getItemDetails(button);
        const existingItem = cart.find(cartItem => cartItem.name === item.name);

        if (existingItem) {
            existingItem.price += item.price;
        } else {
            cart.push({ ...item });
        }

        renderCart();
        cartDiv.style.display = 'block';
    });
});
function renderCart() {
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-items';

        itemDiv.innerHTML = `
<div style="display: flex; justify-content: space-between; width: 100%; align-items: center;">
  
  <!-- Group name + remove -->
  <div style="display: flex; align-items: center; gap: 10px;">
    <span style="font-size: 1.5em; color: black;">${item.name}</span>
    <span class="remove" data-index="${index}" style="color: #BBBBBB; font-size: 1.2em; cursor: pointer;">remove</span>
  </div>

  <!-- Price stays in place -->
  <span style="font-size: 1.5em; color: black; font-weight: bold;">$${item.price}</span>

</div>

        `;

        cartItemsContainer.appendChild(itemDiv);
        total += item.price;
    });

    totalAmount.textContent = `$${total}`;

    document.querySelectorAll('.remove').forEach(btn => {
        btn.addEventListener('click', () => {
            const index = btn.getAttribute('data-index');
            cart.splice(index, 1);
            renderCart();
            if (cart.length === 0) {
                cartDiv.style.display = 'none';
            }
        });
    });
}


closeBtn.addEventListener('click', () => {
    cardDetailsDiv.style.display = 'none';
});

// Show card form on checkout
checkoutBtn.addEventListener('click', () => {
    cardDetailsDiv.style.display = 'block';
});

// Show thank you message
payBtn.addEventListener('click', () => {
    const nameInput = document.getElementById('name').value.trim();
    if (nameInput) {
        cardDetailsDiv.style.display = 'none';
        cartDiv.style.display = 'none';
        thankYouDiv.style.display = 'block';
        thankYouText.textContent = `Thank, ${nameInput}! Your order is on its way!`;
        cart = [];
        renderCart();
    } else {
        alert('Please enter your name');
    }
});
