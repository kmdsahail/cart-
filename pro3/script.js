let cart = [];

function addItem(name, price) {
  const item = {
    name: name,
    price: price,
  };
  cart.push(item);
  displayCart();
}

function removeItem(index) {
  cart.splice(index, 1);
  displayCart();
}

function displayCart() {
  const cartElement = document.getElementById("cart");
  cartElement.innerHTML = "";

  cart.forEach((item, index) => {
    const itemElement = document.createElement("div");
    itemElement.classList.add("cart-item");
    itemElement.innerHTML = `
            <span>${item.name} - $${item.price}</span>
            <button onclick="removeItem(${index})">Remove</button>
        `;
    cartElement.appendChild(itemElement);
  });
}
