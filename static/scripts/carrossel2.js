let slideIndex2 = 0;
const slides2 = document.querySelectorAll('.slide2');

function showSlide2(index) {
    slides2.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
        slide.style.opacity = (i === index) ? 1 : 0;
    });
}

function plusSlides2(n) {
    slideIndex2 += n;
    if (slideIndex2 >= slides2.length) slideIndex2 = 0;
    if (slideIndex2 < 0) slideIndex2 = slides2.length - 1;
    showSlide2(slideIndex2);
}

document.addEventListener("DOMContentLoaded", () => {
    showSlide2(slideIndex2);
});
