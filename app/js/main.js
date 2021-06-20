// const slider = document.querySelector('.slider-container');

let swiper = new Swiper('.slider-container', {
    spaceBetween: 35,
    slidesPerView: 'auto',
    grabCursor: true,
    loop: true,
    slideClass: 'slider-item',
    wrapperClass: 'slider-wrapper',
    slideActiveClass: 'slider-item_active',
    navigation: {
        nextEl: '.slider-button__next',
        prevEl: '.slider-button__prev',
    },
});
/////////////////////////////

let aboutSwiper = new Swiper('.about-slider', {
    slidesPerView: 3,
    spaceBetween: 96,
    grabCursor: true,
    slideClass: 'about-item',
    wrapperClass: 'about-items',
    slideActiveClass: 'about-item_active',
    loop: true,
    navigation: {
        nextEl: '.about-button__next',
        prevEl: '.about-button__prev',
    },
});

const minus = document.querySelector('.btn-minus'),
    plus = document.querySelector('.btn-plus'),
    requestInput = document.querySelector('.request-input');

minus.addEventListener('click', () => {
    let total = requestInput.value;
    total--;
    requestInput.value = total;
    if (requestInput.value < 1) {
        requestInput.value = 1;
    }
});

plus.addEventListener('click', () => {
    let total = requestInput.value;
    total++;
    requestInput.value = total;
    if (requestInput.value > 20) {
        requestInput.value = 20;
    }
});
////////////