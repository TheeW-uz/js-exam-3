let arrivalsConatainer = document.getElementById("arrivals-container");

arrivalsConatainer.innerHTML = "";

arrivalsConatainer.style.marginTop = "55px";
arrivalsConatainer.style.marginLeft = "100px";
arrivalsConatainer.style.display = "flex";
arrivalsConatainer.style.gap = "20px";

const arrivalsData = [
    {
        img: "./imgs/arrivals-img-1.png",
        title: "T-shirt with Tape Details",
        rating: "4.5/5",
        price: "$120"
    },
    {
        img: "./imgs/arrivals-img-2.png",
        title: "Skinnt Fit jeans",
        rating: "3.5/5",
        price: "$240"
    },
    {
        img: "./imgs/arrivals-img-3.png",
        title: "Checkered Shirt",
        rating: "4.5/5",
        price: "$180"
    },
    {
        img: "./imgs/arrivals-img-4.png",
        title: "Sleeve Stripped T-shirt",
        rating: "4.4/5",
        price: "$130"
    }
];

arrivalsData.forEach(item => {

    let arrivalsBox = document.createElement("div");
    arrivalsConatainer.appendChild(arrivalsBox);

    let arrivalsImg = document.createElement("img");
    arrivalsImg.src = item.img;
    arrivalsImg.style.width = "295px";
    arrivalsImg.style.height = "298px";
    arrivalsBox.appendChild(arrivalsImg);

    let arrivalsBoxTitle = document.createElement("p");
    arrivalsBoxTitle.textContent = item.title;
    arrivalsBoxTitle.style.width = "300px";
    arrivalsBoxTitle.style.color = "#000000";
    arrivalsBoxTitle.style.fontSize = "20px";
    arrivalsBoxTitle.style.fontFamily = "Satoshi";
    arrivalsBoxTitle.style.fontWeight = "bold";
    arrivalsBoxTitle.style.paddingTop = "16px";
    arrivalsBox.appendChild(arrivalsBoxTitle);

    let arrivalsBoxRates = document.createElement("div");
    arrivalsBoxRates.style.display = "flex";
    arrivalsBoxRates.style.paddingTop = "9px";
    arrivalsBox.appendChild(arrivalsBoxRates);

    let arrivalsboxStar = document.createElement("img");
    arrivalsboxStar.src = "./imgs/arrivals-star-icon.png";
    arrivalsBoxRates.appendChild(arrivalsboxStar);

    let arrivalsBoxMark = document.createElement("p");
    arrivalsBoxMark.textContent = item.rating;
    arrivalsBoxMark.style.fontSize = "14px";
    arrivalsBoxMark.style.fontWeight = "400";
    arrivalsBoxMark.style.fontFamily = "Satoshi";
    arrivalsBoxMark.style.color = "black";
    arrivalsBoxMark.style.marginLeft = "13px";
    arrivalsBoxRates.appendChild(arrivalsBoxMark);

    let arrivalsBoxPrice = document.createElement("p");
    arrivalsBoxPrice.textContent = item.price;
    arrivalsBoxPrice.style.fontSize = "24px";
    arrivalsBoxPrice.style.fontWeight = "700";
    arrivalsBoxPrice.style.fontFamily = "Satoshi";
    arrivalsBoxPrice.style.color = "#000000";
    arrivalsBoxPrice.style.paddingTop = "8px";
    arrivalsBox.appendChild(arrivalsBoxPrice);

});


let sellingContainer = document.getElementById("selling-container");

sellingContainer.innerHTML = "";

sellingContainer.style.marginTop = "55px";
sellingContainer.style.marginLeft = "100px";
sellingContainer.style.display = "flex";
sellingContainer.style.gap = "20px";

const sellingData = [
    {
        img: "./imgs/selling-img-1.png",
        title: "Vertical Stripped Shirt",
        rating: "5.0/5",
        price: "$212"
    },
    {
        img: "./imgs/selling-img-2.png",
        title: "Courage Graphic T-shirt",
        rating: "4.0/5",
        price: "$145"
    },
    {
        img: "./imgs/selling-img-3.png",
        title: "Loose fit Bermuda Shorts",
        rating: "3.0/5",
        price: "$80"
    },
    {
        img: "./imgs/selling-img-4.png",
        title: "Faded Skinny Jeans",
        rating: "4.5/5",
        price: "$210"
    }
];

sellingData.forEach(item => {

    let sellingBox = document.createElement("div");
    sellingContainer.appendChild(sellingBox);

    let sellingImg = document.createElement("img");
    sellingImg.src = item.img;
    sellingImg.style.width = "295px";
    sellingImg.style.height = "298px";
    sellingBox.appendChild(sellingImg);

    let sellingBoxTitle = document.createElement("p");
    sellingBoxTitle.textContent = item.title;
    sellingBoxTitle.style.width = "300px";
    sellingBoxTitle.style.color = "#000000";
    sellingBoxTitle.style.fontSize = "20px";
    sellingBoxTitle.style.fontFamily = "Satoshi";
    sellingBoxTitle.style.fontWeight = "bold";
    sellingBoxTitle.style.paddingTop = "16px";
    sellingBox.appendChild(sellingBoxTitle);

    let sellingBoxRates = document.createElement("div");
    sellingBoxRates.style.display = "flex";
    sellingBoxRates.style.paddingTop = "9px";
    sellingBox.appendChild(sellingBoxRates);

    let sellingBoxStar = document.createElement("img");
    sellingBoxStar.src = "./imgs/arrivals-star-icon.png";
    sellingBoxRates.appendChild(sellingBoxStar);

    let sellingBoxMark = document.createElement("p");
    sellingBoxMark.textContent = item.rating;
    sellingBoxMark.style.fontSize = "14px";
    sellingBoxMark.style.fontWeight = "400";
    sellingBoxMark.style.fontFamily = "Satoshi";
    sellingBoxMark.style.color = "black";
    sellingBoxMark.style.marginLeft = "13px";
    sellingBoxRates.appendChild(sellingBoxMark);

    let sellingBoxPrice = document.createElement("p");
    sellingBoxPrice.textContent = item.price;
    sellingBoxPrice.style.fontSize = "24px";
    sellingBoxPrice.style.fontWeight = "700";
    sellingBoxPrice.style.fontFamily = "Satoshi";
    sellingBoxPrice.style.color = "#000000";
    sellingBoxPrice.style.paddingTop = "8px";
    sellingBox.appendChild(sellingBoxPrice);

});


function applyMobileStyles() {
    if (window.matchMedia("(max-width: 390px)").matches) {
        const arrivalsContainer = document.getElementById("arrivals-container");
        const sellingContainer = document.getElementById("selling-container");

        arrivalsContainer.style.gap = "16px";
        sellingContainer.style.gap = "16px";

        arrivalsContainer.style.flexWrap = "wrap";
        sellingContainer.style.flexWrap = "wrap";

        arrivalsContainer.querySelectorAll("div").forEach(box => {

            const star = box.querySelector("img[src*='star']");
            if (star) {
                star.style.width = "87px";
                star.style.height = "16px";
                star.style.marginLeft = "50px";
            }

            const title = box.querySelector("p:not(:contains('/5')):not(:contains('$'))");
            if (title) {
                title.style.fontSize = "16px";
                title.style.marginLeft = "50px";
            }

            const rating = box.querySelector("p:contains('/5')");
            if (rating) {
                rating.style.fontSize = "12px";
                rating.style.marginLeft = "50px";
            }

            const price = box.querySelector("p:contains('$')");
            if (price) {
                price.style.marginLeft = "50px";
            }
        });

        sellingContainer.querySelectorAll("div").forEach(box => {
            const img = box.querySelector("img:not([src*='star'])");
            if (img) {
                img.style.width = "198px";
                img.style.height = "200px";
                img.style.marginLeft = "50px";
            }

            const star = box.querySelector("img[src*='star']");
            if (star) {
                star.style.width = "87px";
                star.style.height = "16px";
                star.style.marginLeft = "50px";
            }

            const title = box.querySelector("p:not(:contains('/5')):not(:contains('$'))");
            if (title) {
                title.style.fontSize = "16px";
                title.style.marginLeft = "50px";
            }

            const rating = box.querySelector("p:contains('/5')");
            if (rating) {
                rating.style.fontSize = "12px";
                rating.style.marginLeft = "50px";
            }

            const price = box.querySelector("p:contains('$')");
            if (price) {
                price.style.marginLeft = "50px";
            }
        });
    }
}

applyMobileStyles();

window.addEventListener("resize", applyMobileStyles);


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
