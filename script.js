const products = [
  { id: 1, name: "Red T-shirt", price: 499, image: "redtshirt.jpg" },
  { id: 2, name: "Blue Jeans", price: 999, image: "bluejeans.jpg" },
  { id: 3, name: "Black Sneakers", price: 1299, image: "blacksneakers.jpg" },
  { id: 4, name: "Metal Watch", price: 1499, image: "metalwatch.jpg" },
  { id: 5, name: "Red Cap", price: 299, image:"redcap.jpg"},
   { id: 6, name: "White T-shirt", price: 299, image: "whitetshirt.jpg" },
  { id: 7, name: "Black Jeans", price: 1999, image: "blackjeans.jpg" },
  { id: 8, name: "Red Sneakers", price: 1999, image: "red sneakers.jpg" },
  { id: 9, name: "Fastrack Watch", price: 1699, image: "fastrackwatch.jpg" },
  { id: 10, name: "Blue Cap", price: 499, image:"bluecap.jpg"},
   { id: 11, name: "Yellow T-shirt", price: 399, image: "yellowtshirt.jpg" },
  { id: 12, name: "Tone Jeans", price: 1999, image: "tonejeans.jpg" },
  { id: 13, name: "White Sneakers", price: 1399, image: "whitesneakers.jpg" },
  { id: 14, name: "Sonata Watch", price: 2499, image: "sonatawatch.jpg" },
  { id: 15, name: "Mixed Cap", price: 399, image:"mixedcap.jpg"},
   { id: 16, name: "Blue T-shirt", price: 499, image: "bluetshirt.jpg" },
  { id: 17, name: "Brown Jeans", price: 999, image: "brownjeans.jpg" },
  { id: 18, name: "Sneakers", price: 1299, image: "sneakers.jpg" },
  { id: 19, name: "Black Watch", price: 1499, image: "blackwatch.jpg" },
  { id: 20, name: "tone Cap", price: 299, image:"tonecap.jpg"},
   { id: 21, name: "Black T-shirt", price: 499, image: "blacktshirt.jpg" },
  { id: 22, name: "Green Jeans", price: 999, image: "greenjeans.jpg" },
  { id: 23, name: "Sneakers", price: 1299, image: "trendysneakers.jpg" },
  { id: 24, name: "Strap Watch", price: 1499, image: "strapwatch.jpg" },
  { id: 25, name: "Black Cap", price: 299, image:"blackcap.jpg" },
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
  if (product) {
    cart.push(product);
    updateCart();
  }
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function updateCart() {
  cartCount.textContent = cart.length;
  cartItems.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    const li = document.createElement('li');
    li.innerHTML = `
      ${item.name} - ₹${item.price}
      <button onclick="removeFromCart(${index})" style="margin-left:10px;">❌</button>
    `;
    cartItems.appendChild(li);
  });

  const totalLi = document.createElement('li');
  totalLi.innerHTML = `<strong>Total: ₹${total}</strong>`;
  cartItems.appendChild(totalLi);
}

cartBtn.onclick = () => cartModal.classList.remove('hidden');
closeModal.onclick = () => cartModal.classList.add('hidden');

renderProducts();
const categorySelect = document.getElementById("category-select");

categorySelect.addEventListener("change", () => {
  const value = categorySelect.value;
  if (value === "all") {
    filteredProducts = [...products];
  } else {
    filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(value)
    );
  }
  renderProducts();
});

