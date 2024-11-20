document.addEventListener("DOMContentLoaded", () => {
  fetchProducts();

  document
    .getElementById("sort-options")
    .addEventListener("change", sortProducts);
});

let products = [];

function fetchProducts() {
  fetch("https://interveiw-mock-api.vercel.app/api/getProducts")
    .then((response) => response.json())
    .then((data) => {
      products = data.data.map((item) => item.product);
      displayProducts(products);
    })
    .catch((error) => console.error("Error fetching data:", error));
}

function displayProducts(products) {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";
  products.forEach((product, index) => {
    const productItem = document.createElement("div");
    productItem.classList.add("product-item");
    setTimeout(() => {
      productItem.classList.add("visible");
    }, index * 100);

    const imageUrl = product.image ? product.image.src : "";


    productItem.innerHTML = `
    <img src="${imageUrl}" alt="${product.title}">
    <p>${product.title}</p>
    <p class="price">₹${product.variants[0].price} ${product.variants[0].price_currency}</p>
    <button class="cart-btn">
      <i class="fas fa-shopping-cart"></i> Add to Cart
    </button>
  `;

    productList.appendChild(productItem);
  });
}

function sortProducts() {
  const sortOption = document.getElementById("sort-options").value;
  if (sortOption === "price-asc") {
    products.sort(
      (a, b) =>
        parseFloat(a.variants[0].price) - parseFloat(b.variants[0].price)
    );
  } else if (sortOption === "price-desc") {
    products.sort(
      (a, b) =>
        parseFloat(b.variants[0].price) - parseFloat(a.variants[0].price)
    );
  }
  displayProducts(products);
}
