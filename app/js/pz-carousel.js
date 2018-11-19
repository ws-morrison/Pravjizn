"use strict";

$(document).ready(function () {
  $(".shop-carousel").owlCarousel({
    items: 10,
    loop: true,
    nav: true,
    dots: false,
    responsiveBaseWidth: ".shop-carousel__item",
    responsive: {
      320: {
        items: 1
      },
      768: {
        items: 4
      }
    }
  });

  $(".history-slider").owlCarousel({
    // items: 1,
    loop: true,
    nav: false,
    dots: true,
    margin: 40,
    responsiveBaseWidth: "history-slider__item",
    responsive: {
      320: {
        items: 1,
        dots: true
      },
      768: {
        items: 3,
        dots: false
      }
    }
  });

  $(".header__slider").owlCarousel({
    // items: 1,
    loop: true,
    nav: false,
    dots: true,
    // margin: 15,
    responsiveBaseWidth: "header__slider-item",
    responsive: {
      320: {
        items: 1,
        dots: true
      },
      1440: {
        items: 3
      }
    }
  });

  $(".sober-support__slider").owlCarousel({
    // items: 1,
    loop: true,
    nav: false,
    dots: true,
    margin: 35,
    responsiveBaseWidth: "sober-support__item",
    responsive: {
      320: {
        items: 1,
        dots: true,
      },
      768: {
        items: 2
      },
      1024: {
        items: 2
      },
      1260: {
        items: 2
      },
      1440: {
        items: 2
      }
    }
  });

  $(".podSlider").owlCarousel({
    items: 1,
    responsiveBaseWidth: "pod__item",
    loop: true,
    nav: false,
    dots: false,
    margin: 50,
    responsive: {
      1440: {
        nav: true,
      }
    }
  });
});
