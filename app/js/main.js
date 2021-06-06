const slider = document.querySelector('.slider__container');

let swiper = new Swiper(slider, {
    spaceBetween: 35,
    slidesPerView: 2.5,
    grabCursor: true,
    loop: true,
    mousewheel: {
        invert: true,
    },
    slideClass: 'slider__item',
    wrapperClass: 'slider__wrapper',
    slideActiveClass: 'slider__item-active',
    navigation: {
        nextEl: '.slider__button-next',
        prevEl: '.slider__button-prev',
    },
});