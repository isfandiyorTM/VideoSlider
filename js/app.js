// Responsive menu
const menuBtn = document.getElementById("menu");
const menuBtnIcon = document.querySelector("#menu i");
const menu = document.querySelector("header nav .container ul");
const body = document.querySelector("body");

menuBtn.addEventListener("click", () => {
    menuBtnIcon.classList.toggle("fa-bars");
    menuBtnIcon.classList.toggle("fa-xmark");

    menu.classList.toggle("show");
    body.classList.toggle("scroll");
})

// video slider 
const buttons = document.querySelectorAll(".slider-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".text-div");
var sliderNav = function(manual) {
    buttons.forEach((btn) => {
        btn.classList.remove("active");
    })
    slides.forEach((slide) => {
        slide.classList.remove("active");
    })
    contents.forEach((content) => {
        content.classList.remove("active");
    })

    buttons[manual].classList.add("active")
    slides[manual].classList.add("active")
    contents[manual].classList.add("active")
}

buttons.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    })
})