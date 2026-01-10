// ===== HOME.JS =====

// ===== ARRIVALS & SELLING SETUP =====
let arrivalsContainer = document.getElementById("arrivals-container");
arrivalsContainer.innerHTML = "";
arrivalsContainer.style.marginTop = "55px";
arrivalsContainer.style.marginLeft = "100px";
arrivalsContainer.style.display = "flex";
arrivalsContainer.style.gap = "20px";

const arrivalsData = [
    { img: "./imgs/arrivals-img-1.png", title: "T-shirt with Tape Details", rating: "4.5/5", price: "$120" },
    { img: "./imgs/arrivals-img-2.png", title: "Skinnt Fit jeans", rating: "3.5/5", price: "$240" },
    { img: "./imgs/arrivals-img-3.png", title: "Checkered Shirt", rating: "4.5/5", price: "$180" },
    { img: "./imgs/arrivals-img-4.png", title: "Sleeve Stripped T-shirt", rating: "4.4/5", price: "$130" }
];

let sellingContainer = document.getElementById("selling-container");
sellingContainer.innerHTML = "";
sellingContainer.style.marginTop = "55px";
sellingContainer.style.marginLeft = "100px";
sellingContainer.style.display = "flex";
sellingContainer.style.gap = "20px";

const sellingData = [
    { img: "./imgs/selling-img-1.png", title: "Vertical Stripped Shirt", rating: "5.0/5", price: "$212" },
    { img: "./imgs/selling-img-2.png", title: "Courage Graphic T-shirt", rating: "4.0/5", price: "$145" },
    { img: "./imgs/selling-img-3.png", title: "Loose fit Bermuda Shorts", rating: "3.0/5", price: "$80" },
    { img: "./imgs/selling-img-4.png", title: "Faded Skinny Jeans", rating: "4.5/5", price: "$210" }
];

// ===== GENERIC FUNCTION TO RENDER PRODUCTS =====
function renderProducts(container, data) {
    container.innerHTML = "";
    data.forEach(item => {
        let box = document.createElement("div");
        box.className = "product-box";
        box.style.display = "flex";
        box.style.flexDirection = "column";
        box.style.width = "300px";

        // IMAGE
        let img = document.createElement("img");
        img.src = item.img;
        img.style.width = "100%";
        img.style.height = "298px";
        box.appendChild(img);

        // TITLE
        let title = document.createElement("p");
        title.textContent = item.title;
        title.style.fontWeight = "bold";
        title.style.fontSize = "20px";
        box.appendChild(title);

        // RATING
        let ratingDiv = document.createElement("div");
        ratingDiv.style.display = "flex";
        ratingDiv.style.alignItems = "center";
        let star = document.createElement("img");
        star.src = "./imgs/arrivals-star-icon.png";
        ratingDiv.appendChild(star);
        let ratingText = document.createElement("p");
        ratingText.textContent = item.rating;
        ratingText.style.marginLeft = "8px";
        ratingDiv.appendChild(ratingText);
        box.appendChild(ratingDiv);

        // PRICE + ADD BUTTON
        let priceChain = document.createElement("div");
        priceChain.style.display = "flex";
        priceChain.style.alignItems = "center";
        priceChain.style.marginTop = "8px";

        let price = document.createElement("p");
        price.textContent = item.price;
        priceChain.appendChild(price);

        let btn = document.createElement("button");
        btn.textContent = "Add To Cart";
        btn.style.marginLeft = "15px";
        btn.style.cursor = "pointer";
        priceChain.appendChild(btn);

        box.appendChild(priceChain);
        container.appendChild(box);

        // ===== ADD TO CART LOGIC =====
        btn.addEventListener("click", () => {
            let priceNum = parseFloat(item.price.replace(/[^0-9.]/g, ""));
            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            if (cart.some(p => p.title === item.title)) {
                alert("You already have this item");
                return;
            }

            cart.push({ img: item.img, title: item.title, price: priceNum, qty: 1 });
            localStorage.setItem("cart", JSON.stringify(cart));
            renderHomeCart(); // update floating cart
            alert("Added to cart");
        });
    });
}

// RENDER ARRIVALS & SELLING
renderProducts(arrivalsContainer, arrivalsData);
renderProducts(sellingContainer, sellingData);

// ===== FLOATING CART SETUP =====
const homeCart = document.createElement("div");
homeCart.id = "home-cart";
homeCart.style.position = "fixed";
homeCart.style.top = "80px";
homeCart.style.right = "20px";
homeCart.style.width = "300px";
homeCart.style.backgroundColor = "#fff";
homeCart.style.padding = "10px";
homeCart.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.2)";
homeCart.style.maxHeight = "500px";
homeCart.style.overflowY = "auto";
homeCart.style.display = "none"; // hidden initially
document.body.appendChild(homeCart);

function renderHomeCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    homeCart.innerHTML = "";

    if (cart.length === 0) {
        homeCart.style.display = "none";
        return;
    }

    homeCart.style.display = "block";

    cart.forEach((item, index) => {
        const div = document.createElement("div");
        div.style.display = "flex";
        div.style.alignItems = "center";
        div.style.marginBottom = "10px";

        div.innerHTML = `
            <img src="${item.img}" style="width:50px;height:50px;margin-right:10px;">
            <div style="flex:1">
                <p style="margin:0;font-weight:bold;">${item.title}</p>
                <p style="margin:0;">$${(item.price * item.qty).toFixed(2)}</p>
            </div>
            <button class="remove-btn" style="margin-left:5px;">✖</button>
        `;

        div.querySelector(".remove-btn").addEventListener("click", () => {
            cart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            renderHomeCart();
        });

        homeCart.appendChild(div);
    });
}

// Initial render
renderHomeCart();

// ===== MOBILE STYLES =====
function applyMobileStyles() {
    const isMobile = window.matchMedia("(max-width: 390px)").matches;
    [arrivalsContainer, sellingContainer].forEach(container => {
        container.style.gap = isMobile ? "16px" : "20px";
        container.style.flexWrap = isMobile ? "wrap" : "nowrap";

        container.querySelectorAll("div").forEach(box => {
            const img = box.querySelector("img:not([src*='star'])");
            const star = box.querySelector("img[src*='star']");
            const title = box.querySelector("p:not(:contains('/5')):not(:contains('$'))");
            const rating = box.querySelector("p:contains('/5')");
            const price = box.querySelector("p:contains('$')");

            if (isMobile) {
                if (img) { img.style.width = "198px"; img.style.height = "200px"; img.style.marginLeft = "16px"; }
                if (star) { star.style.width = "87px"; star.style.height = "16px"; star.style.marginLeft = "16px"; }
                if (title) { title.style.fontSize = "16px"; title.style.marginLeft = "16px"; }
                if (rating) { rating.style.fontSize = "12px"; rating.style.marginLeft = "16px"; }
                if (price) { price.style.marginLeft = "16px"; }
            } else {
                if (img) { img.style.width = ""; img.style.height = ""; img.style.marginLeft = ""; }
                if (star) { star.style.width = ""; star.style.height = ""; star.style.marginLeft = ""; }
                if (title) { title.style.fontSize = ""; title.style.marginLeft = ""; }
                if (rating) { rating.style.fontSize = ""; rating.style.marginLeft = ""; }
                if (price) { price.style.marginLeft = ""; }
            }
        });
    });
}
applyMobileStyles();
window.addEventListener("resize", applyMobileStyles);

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
