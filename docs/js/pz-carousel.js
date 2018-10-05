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
        items: 1,
        // nav: true
      },
      768: {
        items: 4,
        // nav: true
      }
    },
  });
});
