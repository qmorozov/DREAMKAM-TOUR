const slider = document.querySelector('.slider__container');

let swiper = new Swiper('.slider__container', {
    spaceBetween: 35,
    // slidesPerView: 2.5,
    slidesPerView: 'auto',
    grabCursor: true,
    loop: true,
    // mousewheel: {
    //     invert: true,
    // },
    slideClass: 'slider__item',
    wrapperClass: 'slider__wrapper',
    slideActiveClass: 'slider__item_active',
    navigation: {
        nextEl: '.slider__button-next',
        prevEl: '.slider__button-prev',
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