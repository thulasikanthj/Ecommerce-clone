const products = [
  { id: 1, name: "Red T-shirt", price: 499, image: "redtshirt.jpg" },
  { id: 2, name: "Blue Jeans", price: 999, image: "bluejeans.jpg" },
  { id: 3, name: "Black Sneakers", price: 1299, image: "blacksneakers.jpg" },
  { id: 4, name: "Metal Watch", price: 1499, image: "metalwatch.jpg" },
  { id: 5, name: "Red Cap", price: 299, image:"redcap.jpg"},
   { id: 1, name: "White T-shirt", price: 299, image: "whitetshirt.jpg" },
  { id: 2, name: "Black Jeans", price: 1999, image: "blackjeans.jpg" },
  { id: 3, name: "Red Sneakers", price: 1999, image: "red sneakers.jpg" },
  { id: 4, name: "Fastrack Watch", price: 1699, image: "fastrackwatch.jpg" },
  { id: 5, name: "Blue Cap", price: 499, image:"bluecap.jpg"},
   { id: 1, name: "Yellow T-shirt", price: 399, image: "yellowtshirt.jpg" },
  { id: 2, name: "Tone Jeans", price: 1999, image: "tonejeans.jpg" },
  { id: 3, name: "White Sneakers", price: 1399, image: "whitesneakers.jpg" },
  { id: 4, name: "Sonata Watch", price: 2499, image: "sonatawatch.jpg" },
  { id: 5, name: "Mixed Cap", price: 399, image:"mixedcap.jpg"},
   { id: 1, name: "Blue T-shirt", price: 499, image: "bluetshirt.jpg" },
  { id: 2, name: "Brown Jeans", price: 999, image: "brownjeans.jpg" },
  { id: 3, name: "Sneakers", price: 1299, image: "sneakers.jpg" },
  { id: 4, name: "Black Watch", price: 1499, image: "blackwatch.jpg" },
  { id: 5, name: "tone Cap", price: 299, image:"tonecap.jpg"},
   { id: 1, name: "Black T-shirt", price: 499, image: "blacktshirt.jpg" },
  { id: 2, name: "Green Jeans", price: 999, image: "greenjeans.jpg" },
  { id: 3, name: "Sneakers", price: 1299, image: "trendysneakers.jpg" },
  { id: 4, name: "Strap Watch", price: 1499, image: "strapwatch.jpg" },
  { id: 5, name: "Black Cap", price: 299, image:"blackcap.jpg" },
];

let cart = [];

const productList = document.getElementById('product-list');
const cartBtn = document.getElementById('cart-btn');
const cartCount = document.getElementById('cart-count');
const cartModal = document.getElementById('cart-modal');
const closeModal = document.getElementById('close-modal');
const cartItems = document.getElementById('cart-items');

function renderProducts() {
  products.forEach(product => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(div);
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCart();
}

function updateCart() {
  cartCount.textContent = cart.length;
  cartItems.innerHTML = "";
  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ₹${item.price}`;
    cartItems.appendChild(li);
  });
}

cartBtn.onclick = () => cartModal.classList.remove('hidden');
closeModal.onclick = () => cartModal.classList.add('hidden');

renderProducts();
