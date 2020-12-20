//
const $offerSlider =
    document.querySelector('.offer__swiper-container.swiper-container') || null
const $servicesSlider =
    document.querySelector('.services__swiper-container.swiper-container') ||
    null
const $staffSlider =
    document.querySelector('.staff__swiper-container.swiper-container') || null
const $protfolioSlider =
    document.querySelector('.portfolio__swiper-container.swiper-container') ||
    null
const $promoSlider =
    document.querySelector('.promo__swiper-container.swiper-container') || null

if ($offerSlider) {
    const offerSlider = new Swiper('.offer__swiper-container', {
        loop: true,
        grabCursor: true,
        navigation: {
            nextEl: '.offer__swiper-button-next',
            prevEl: '.offer__swiper-button-prev',
        },
        pagination: {
            el: '.offer__swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        autoplay: {
            delay: 5000,
        },
    })
}

if ($servicesSlider) {
    const servicesSlider = new Swiper('.services__swiper-container', {
        loop: false,
        grabCursor: true,
        navigation: {
            nextEl: '.services__swiper-button-next',
            prevEl: '.services__swiper-button-prev',
        },
        pagination: {
            el: '.services__swiper-pagination',
            type: 'progressbar',
        },

        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            899: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1023: {
                slidesPerView: 3,
                spaceBetween: 25,
            },
        },
    })
}

if ($promoSlider) {
    const promoSlider = new Swiper('.promo__swiper-container', {
        loop: true,
        grabCursor: true,
        navigation: {
            nextEl: '.promo__swiper-button-next',
            prevEl: '.promo__swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            769: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1050: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1369: {
                slidesPerView: 4,
                spaceBetween: 25,
            },
        },
    })
}

if ($staffSlider) {
    const staffSlider = new Swiper('.staff__swiper-container', {
        loop: false,
        slidesPerView: 1,
        grabCursor: true,
        autoHeight: true,
        navigation: {
            nextEl: '.staff__swiper-button-next',
            prevEl: '.staff__swiper-button-prev',
        },
    })
}

if ($protfolioSlider) {
    const protfolioSlider = new Swiper('.portfolio__swiper-container', {
        loop: true,
        spaceBetween: 5,
        grabCursor: true,
        breakpoints: {
            320: {
                slidesPerView: 'auto',
                centeredSlides: true,
            },
            800: {
                slidesPerView: 2,
                freeMode: true,
            },
            1100: {
                slidesPerView: 'auto',
                centeredSlides: true,
            },
        },
    })
}
