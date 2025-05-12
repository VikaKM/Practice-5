new Swiper(".brand__slider", {
    
     slidesPerView: "auto",
     spaceBetween: 16,
     freeMode: false,
     centeredSlides: false,
     loop: false,
    
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },

});

function showMore() {
    const brandListElement = document.getElementById("brandList");
    const brandItems = brandListElement.querySelectorAll(".brand__item");

    const toggleButton = document.querySelector(".brand__button");

    const currentWindowWidth = window.innerWidth;

    let numberOfVisibleItems;

    if (currentWindowWidth >= 1120) {
        numberOfVisibleItems = 8;
    } else if ((currentWindowWidth >= 768) && (currentWindowWidth < 1120)) {
        numberOfVisibleItems = 6;
    } else if ((currentWindowWidth >= 320) && (currentWindowWidth < 768)) {
        numberOfVisibleItems = Infinity;
    }
        
    const isListExpanded = brandListElement.classList.contains("expanded");


    brandItems.forEach(hideItems(isListExpanded, numberOfVisibleItems));

    const el = document.getElementById("arrow");
    const header = document.querySelector(".header");

    if (isListExpanded === true) {
        brandListElement.classList.remove("expanded");
        toggleButton.textContent = "Показать все";
        el.classList.toggle("rotated");
        header.classList.remove("shadow");
    } else {
        brandListElement.classList.add("expanded");
        toggleButton.textContent = "Скрыть";
        el.classList.toggle("rotated");
        header.classList.add("shadow");      
    }
}

function hideItems(isListExpanded, numberOfVisibleItems) {
    return function (brandItemElement, itemIndex) {
        if (isListExpanded === true && itemIndex >= numberOfVisibleItems) {
            brandItemElement.style.display = "none";
        } else {
            brandItemElement.style.display = "flex";
        }
    };
}

window.addEventListener("resize", function () {
    const brandListElement = document.getElementById("brandList");
    const isListExpanded = brandListElement.classList.contains("expanded");

    if (isListExpanded === false) {
        showMore(); 
        showMore(); 
    }

});