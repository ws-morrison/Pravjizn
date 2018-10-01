"use strict";

$(document).ready(function() {
  $(".shop-carousel").owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    dots: false,
    responsiveBaseWidth: ".shop-carousel__item",
    responsive: {
      320: {
        items: 1
      },
      // 1024: {
      //   items: 4,
      //   responsiveBaseWidth: ".shop-carousel__item"
      // }
    },
  });
});
