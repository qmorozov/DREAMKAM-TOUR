// const { default: Swiper } = require("swiper");

let swiper = new Swiper('.slider-container', {
    spaceBetween: 35,
    slidesPerView: 'auto',
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    slideClass: 'slider-item',
    wrapperClass: 'slider-wrapper',
    slideActiveClass: 'slider-item_active',
    navigation: {
        nextEl: '.slider-button__next',
        prevEl: '.slider-button__prev',
    },
    speed: 650,
    breakpoints: {
        700: {
            centeredSlides: false,
        }
    }
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
    speed: 650,
});

////////////////////////////////////////
const slider = document.querySelector('.cards-wrapper');

let mySwiper;

function mobileSlider() {
    if (window.innerWidth <= 1199 && slider.dataset.mobile == 'false') {
        mySwiper = new Swiper(slider, {
            slidesPerView: 'auto',
            spaceBetween: 32,
            loop: true,
            centeredSlides: true,
            slideClass: 'cards-item',
            wrapperClass: 'cards-items',
            speed: 650,

        })
        slider.dataset.mobile = 'true;'
    }
    if (window.innerWidth > 1199) {
        slider.dataset.mobile = 'false';
        if (slider.classList.contains('swiper-container-initialized')) {
            mySwiper.destroy();
        }
    }
}
mobileSlider();

window.addEventListener('resize', () => {
    mobileSlider();
})

//////////////////////////////

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
const navigation = document.querySelector('.header'),
    btn = document.querySelector('.burger');
btn.addEventListener('click', function(event) {
    btn.classList.toggle('burger_active');
    navigation.classList.toggle('header_active');
    if (navigation.classList.contains('header_active')) {
        hideScroll();
    } else {
        showScroll();
    }
});

const hideScroll = () => {
    const scrollWidth = `${getScrollbarWidth()}px`;
    document.body.style.paddingRight = scrollWidth;
    document.body.style.overflow = 'hidden';
    navigation.style.paddingRight = scrollWidth;
};

const showScroll = () => {
    document.body.style.paddingRight = '';
    document.body.style.overflow = 'visible';
    navigation.style.paddingRight = '';
};

const getScrollbarWidth = () => {
    const outer = document.createElement('div');
    outer.style.position = 'absolute';
    outer.style.top = '-9999px';
    outer.style.width = '50px';
    outer.style.height = '50px';
    outer.style.overflow = 'scroll';
    outer.style.visibility = 'hidden';
    document.body.appendChild(outer);
    const ScrollBarWidth = outer.offsetWidth - outer.clientWidth;
    document.body.removeChild(outer);
    return ScrollBarWidth;
};

////////////////

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
        btn.classList.remove('burger_active');
        navigation.classList.remove('header_active');
        showScroll();
    });
};
////////////////////