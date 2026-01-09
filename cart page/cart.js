function isMobile() {
    return window.matchMedia("(max-width: 390px)").matches;
}

bar.addEventListener("click", () => {
    if (!isMobile()) return;
    sidebar.classList.add("active");
});

closeSidebar.addEventListener("click", () => {
    if (!isMobile()) return;
    sidebar.classList.remove("active");
});

document.querySelectorAll(".sidebar-nav a").forEach(link => {
    link.addEventListener("click", () => {
        if (!isMobile()) return;
        sidebar.classList.remove("active");
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const cartContainer = document.getElementById("cart-main");

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    cartContainer.innerHTML = "";

    if(cart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }

    cart.forEach(item => {
        const div = document.createElement("div");
        div.style.display = "flex";
        div.style.alignItems = "center";
        div.style.gap = "20px";
        div.style.marginBottom = "20px";
        div.style.border = "1px solid #ccc";
        div.style.padding = "10px";
        div.style.borderRadius = "8px";

        const img = document.createElement("img");
        img.src = item.img;
        img.width = 100;
        img.height = 100;
        img.style.objectFit = "cover";
        img.style.borderRadius = "8px";

        const info = document.createElement("div");

        const title = document.createElement("h3");
        title.textContent = item.title;
        title.style.margin = "0";

        const price = document.createElement("p");
        price.textContent = item.price;
        price.style.margin = "5px 0";

        info.appendChild(title);
        info.appendChild(price);

        div.appendChild(img);
        div.appendChild(info);

        cartContainer.appendChild(div);
    });
});
