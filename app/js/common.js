"use strict";

// Dropdown footer menu & Open/Close Info-services
$(document).ready(function() {
  $(".footer-list").css({ display: "none" });
  $(".info-service-item").css({ display: "none" });
  $(".opened-item").each(function() {
    $(this).on("click", function() {
      $(this)
        .children(".open-list")
        .slideToggle(300);

      // Change Title Color
      $(this).toggleClass("info-services__title--active");
    });
  });

  // Dropdown header menu
  $(".burger").on("click", function() {
    $(".drop-menu").slideToggle(300);
  });

  // Burger animation
  $(".burger").click(function() {
    $(this).toggleClass("open");
    $(".menu").toggleClass("opened-menu");
  });

});
