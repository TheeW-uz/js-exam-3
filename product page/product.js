const mainImg = document.querySelector(".hero-img-4");
const price = document.querySelector(".hero-price");
const oldPrice = document.querySelector(".hero-price-discount");
const discount = document.querySelector(".hero-red-discount");

const colorDivs = document.querySelectorAll(".color-wrapper div");

colorDivs.forEach(color => {
  color.addEventListener("click", () => {
    mainImg.src = color.dataset.img;

    price.textContent = `$${color.dataset.price}`;
    oldPrice.textContent = `$${color.dataset.old}`;
    discount.textContent = color.dataset.discount;

    colorDivs.forEach(c => {
      const icon = c.querySelector("i");
      if (icon) icon.remove();
    });

    const tick = document.createElement("i");
    tick.className = "fa-solid fa-check";
    tick.style.color = "white";
    tick.style.position = "absolute";
    tick.style.top = "10px";
    tick.style.right = "9px";
    tick.style.fontSize = "16px";
    color.style.position = "relative";
    color.appendChild(tick);
  });
});


const bar = document.getElementById("bar");
const sidebar = document.getElementById("sidebar");
const closeSidebar = document.getElementById("close-sidebar");

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
