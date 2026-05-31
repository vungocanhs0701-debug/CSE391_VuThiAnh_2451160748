const products = [
    { id: 1, name: "iPhone 16", price: 25990000, category: "phone", image: "https://placehold.co/200", rating: 4.5, inStock: true },
    { id: 2, name: "Samsung S24", price: 22990000, category: "phone", image: "https://placehold.co/200", rating: 4.4, inStock: true },
    { id: 3, name: "Pixel 9", price: 19990000, category: "phone", image: "https://placehold.co/200", rating: 4.6, inStock: true },

    { id: 4, name: "MacBook Pro", price: 45990000, category: "laptop", image: "https://placehold.co/200", rating: 4.8, inStock: true },
    { id: 5, name: "Dell XPS 15", price: 35990000, category: "laptop", image: "https://placehold.co/200", rating: 4.7, inStock: true },
    { id: 6, name: "ThinkPad X1", price: 32990000, category: "laptop", image: "https://placehold.co/200", rating: 4.5, inStock: false },

    { id: 7, name: "AirPods Pro", price: 6990000, category: "accessory", image: "https://placehold.co/200", rating: 4.3, inStock: true },
    { id: 8, name: "Galaxy Buds", price: 3490000, category: "accessory", image: "https://placehold.co/200", rating: 4.1, inStock: true },
    { id: 9, name: "Logitech Mouse", price: 790000, category: "accessory", image: "https://placehold.co/200", rating: 4.2, inStock: true },

    { id: 10, name: "iPad Air", price: 16990000, category: "tablet", image: "https://placehold.co/200", rating: 4.6, inStock: true },
    { id: 11, name: "Xiaomi Pad 6", price: 7990000, category: "tablet", image: "https://placehold.co/200", rating: 4.2, inStock: true },
    { id: 12, name: "Galaxy Tab S9", price: 18990000, category: "tablet", image: "https://placehold.co/200", rating: 4.4, inStock: false }
];

let currentCategory = "all";
let currentSearch = "";
let currentSort = "default";
let cartCount = 0;

const app = document.createElement("div");
app.className = "app";
document.body.appendChild(app);

const header = document.createElement("div");
header.className = "header";

const title = document.createElement("h1");
title.textContent = "Product Catalog";

const rightBox = document.createElement("div");

const darkBtn = document.createElement("button");
darkBtn.textContent = "Dark Mode";

const cart = document.createElement("span");
cart.className = "cart";
cart.textContent = "🛒";

const cartBadge = document.createElement("span");
cartBadge.className = "cart-badge";
cartBadge.textContent = "0";

cart.appendChild(cartBadge);
rightBox.appendChild(darkBtn);
rightBox.appendChild(cart);

header.appendChild(title);
header.appendChild(rightBox);
app.appendChild(header);

const toolbar = document.createElement("div");
toolbar.className = "toolbar";

const searchInput = document.createElement("input");
searchInput.placeholder = "Tìm sản phẩm...";

const sortSelect = document.createElement("select");

const sortOptions = [
    { value: "default", text: "Sắp xếp" },
    { value: "priceAsc", text: "Giá tăng" },
    { value: "priceDesc", text: "Giá giảm" },
    { value: "nameAZ", text: "Tên A-Z" },
    { value: "ratingDesc", text: "Đánh giá cao nhất" }
];

sortOptions.forEach(optionData => {
    const option = document.createElement("option");
    option.value = optionData.value;
    option.textContent = optionData.text;
    sortSelect.appendChild(option);
});

toolbar.appendChild(searchInput);

const categories = ["all", "phone", "laptop", "accessory", "tablet"];

categories.forEach(category => {
    const btn = document.createElement("button");
    btn.className = "category-btn";
    btn.dataset.category = category;
    btn.textContent = category;

    if (category === "all") {
        btn.classList.add("active");
    }

    toolbar.appendChild(btn);
});

toolbar.appendChild(sortSelect);
app.appendChild(toolbar);

const productsGrid = document.createElement("div");
productsGrid.className = "products-grid";
app.appendChild(productsGrid);

function formatPrice(price) {
    return price.toLocaleString("vi-VN") + "đ";
}

function renderProducts(list) {
    productsGrid.textContent = "";

    if (list.length === 0) {
        const empty = document.createElement("p");
        empty.textContent = "Không tìm thấy sản phẩm.";
        productsGrid.appendChild(empty);
        return;
    }

    list.forEach(product => {
        const card = document.createElement("div");
        card.className = "card";
        card.dataset.id = product.id;

        const img = document.createElement("img");
        img.src = product.image;
        img.alt = product.name;

        const name = document.createElement("h3");
        name.textContent = product.name;

        const price = document.createElement("p");
        price.className = "price";
        price.textContent = formatPrice(product.price);

        const category = document.createElement("p");
        category.textContent = "Category: " + product.category;

        const rating = document.createElement("p");
        rating.textContent = "Rating: " + product.rating;

        const stock = document.createElement("p");
        stock.className = product.inStock ? "stock" : "stock out";
        stock.textContent = product.inStock ? "Còn hàng" : "Hết hàng";

        const addBtn = document.createElement("button");
        addBtn.className = "add-cart-btn";
        addBtn.textContent = "Thêm giỏ";

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(price);
        card.appendChild(category);
        card.appendChild(rating);
        card.appendChild(stock);
        card.appendChild(addBtn);

        productsGrid.appendChild(card);
    });
}

function filterByCategory(list) {
    if (currentCategory === "all") {
        return list;
    }

    return list.filter(product => product.category === currentCategory);
}

function searchProducts(list) {
    return list.filter(product =>
        product.name.toLowerCase().includes(currentSearch.toLowerCase())
    );
}

function sortProducts(list) {
    const copied = [...list];

    if (currentSort === "priceAsc") {
        return copied.sort((a, b) => a.price - b.price);
    }

    if (currentSort === "priceDesc") {
        return copied.sort((a, b) => b.price - a.price);
    }

    if (currentSort === "nameAZ") {
        return copied.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (currentSort === "ratingDesc") {
        return copied.sort((a, b) => b.rating - a.rating);
    }

    return copied;
}

function updateProducts() {
    let result = products;

    result = filterByCategory(result);
    result = searchProducts(result);
    result = sortProducts(result);

    renderProducts(result);
}

function openModal(product) {
    const overlay = document.createElement("div");
    overlay.className = "modal-overlay";

    const modal = document.createElement("div");
    modal.className = "modal";

    const closeBtn = document.createElement("button");
    closeBtn.className = "close-modal";
    closeBtn.textContent = "X";

    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.name;

    const name = document.createElement("h2");
    name.textContent = product.name;

    const price = document.createElement("p");
    price.textContent = "Giá: " + formatPrice(product.price);

    const category = document.createElement("p");
    category.textContent = "Danh mục: " + product.category;

    const rating = document.createElement("p");
    rating.textContent = "Đánh giá: " + product.rating;

    modal.appendChild(closeBtn);
    modal.appendChild(img);
    modal.appendChild(name);
    modal.appendChild(price);
    modal.appendChild(category);
    modal.appendChild(rating);

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    closeBtn.addEventListener("click", function () {
        overlay.remove();
    });

    overlay.addEventListener("click", function (e) {
        if (e.target === overlay) {
            overlay.remove();
        }
    });
}

searchInput.addEventListener("input", function () {
    currentSearch = searchInput.value;
    updateProducts();
});

sortSelect.addEventListener("change", function () {
    currentSort = sortSelect.value;
    updateProducts();
});

toolbar.addEventListener("click", function (e) {
    if (!e.target.classList.contains("category-btn")) return;

    document.querySelectorAll(".category-btn").forEach(btn => {
        btn.classList.remove("active");
    });

    e.target.classList.add("active");
    currentCategory = e.target.dataset.category;
    updateProducts();
});

productsGrid.addEventListener("click", function (e) {
    const card = e.target.closest(".card");

    if (!card) return;

    const productId = Number(card.dataset.id);
    const product = products.find(p => p.id === productId);

    if (e.target.classList.contains("add-cart-btn")) {
        e.stopPropagation();

        cartCount++;
        cartBadge.textContent = cartCount;

        return;
    }

    openModal(product);
});

darkBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

renderProducts(products);