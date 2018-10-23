"use strict";

$(document).ready(function() {
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
    margin: 15,
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
});
