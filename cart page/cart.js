// ===== CART.JS =====
const cartContainer = document.getElementById("cart-main");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
    cartContainer.innerHTML = "";

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty</p>";
        return;
    }

    cart.forEach((item, index) => {
        const div = document.createElement("div");
        div.className = "cart-item";
        div.style.display = "flex";
        div.style.alignItems = "center";
        div.style.marginBottom = "20px";

        div.innerHTML = `
            <img src="${item.img}" style="width:100px;height:100px;margin-right:16px;">
            <div>
                <h4>${item.title}</h4>
                <p class="item-price">$${(item.price * item.qty).toFixed(2)}</p>
                <div class="qty-controls">
                    <button class="minus">−</button>
                    <span>${item.qty}</span>
                    <button class="plus">+</button>
                </div>
            </div>
            <button class="remove-btn" style="margin-left:16px;">✖</button>
        `;

        // + / − buttons
        const minus = div.querySelector(".minus");
        const plus = div.querySelector(".plus");

        minus.addEventListener("click", () => {
            if (item.qty > 1) { item.qty--; updateCart(); }
        });

        plus.addEventListener("click", () => { item.qty++; updateCart(); });

        // disable minus at qty 1
        if (item.qty === 1) { minus.disabled = true; minus.style.backgroundColor = "#999"; minus.style.cursor = "not-allowed"; }

        // remove button
        div.querySelector(".remove-btn").addEventListener("click", () => {
            cart.splice(index, 1);
            updateCart();
        });

        cartContainer.appendChild(div);
    });
}

function updateCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

// ===== SIDEBAR LOGIC =====
const bar = document.getElementById("bar");
const sidebar = document.getElementById("sidebar");
const closeSidebar = document.getElementById("close-sidebar");

function isMobile() { return window.matchMedia("(max-width: 390px)").matches; }

bar.addEventListener("click", () => { if (!isMobile()) return; sidebar.classList.add("active"); });
closeSidebar.addEventListener("click", () => { if (!isMobile()) return; sidebar.classList.remove("active"); });
document.querySelectorAll(".sidebar-nav a").forEach(link => {
    link.addEventListener("click", () => { if (!isMobile()) return; sidebar.classList.remove("active"); });
});

renderCart();
