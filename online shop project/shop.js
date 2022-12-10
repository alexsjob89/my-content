// section btn
const currency = document.querySelector("#currency");
const account = document.querySelector("#account");
// finished section btn

const currencys = document.querySelector(".curreOps");
const accounts = document.querySelector(".accontsLi");




currency.addEventListener('click', () => {
    if (currencys.style.display === "none") {
        currencys.style.display = "block";
    } else {
        currencys.style.display = "none";
    }
});

account.addEventListener('click', () => {
    if (accounts.style.display === "none") {
        accounts.style.display = "block";
    } else {
        accounts.style.display = "none";
    }
});


let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide-image");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 3000); // Change image every 2 seconds
}





const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});