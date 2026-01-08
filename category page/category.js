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


const mobileFilter = document.getElementById("mobile-filter");
const openFilterBtn = document.getElementById("icon-main");
const closeFilterBtn = document.getElementById("close-mobile-filter");

function isMobile() {
  return window.matchMedia("(max-width: 390px)").matches;
}

openFilterBtn.addEventListener("click", () => {
  if (!isMobile()) return;
  mobileFilter.classList.add("active");
});

closeFilterBtn.addEventListener("click", () => {
  mobileFilter.classList.remove("active");
});
