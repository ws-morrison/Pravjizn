"use strict";

$(document).ready(function() {
  $(".shop-carousel").owlCarousel({
    items: 4,
    loop: true,
    nav: true,
    dots: false,
    responsiveBaseWidth: ".shop-carousel__item",
    responsive: {
      0: {
        items: 1,
      },
      320: {
        items: 1,
        // nav: true
      },
      1024: {
        items: 4,
        // nav: true
      }
    },
  });
});
