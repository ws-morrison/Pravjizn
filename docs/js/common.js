"use strict";

// Dropdown footer menu
$(document).ready(function() {
  $(".footer-list").css({ display: "none" });

  $(".opened-item").each(function() {
    $(this).on("click", function() {
      $(this)
        .children(".open-list")
        .slideToggle(300);
    });
  });
});

// Dropdown header menu
$(".drop-menu").css({ display: "none" });
$(".burger").on("click", function() {
  $(".drop-menu").slideToggle(300);
});

// Burger animation
$(".burger").click(function() {
  $(this).toggleClass("open");
  $(".menu").toggleClass("opened-menu");
});
