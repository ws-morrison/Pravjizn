"use strict";

// Dropdown footer menu
$(document).ready(function() {
  var onFooterMenu = function() {
    $(".footer-list").css({ display: "none" });
    $(".opened-item").each(function() {
      $(this).on("click", function() {
        $(this)
          .children(".open-list")
          .slideToggle("fast");
      });
    });
  };
  onFooterMenu();

  // Dropdown header menu
  var OnBurgerMenu = function() {
    $(".burger").on("click", function() {
      $(".drop-menu").slideToggle(300);
      $(".drop-menu").css("display", "flex");
    });

    // Burger animation
    $(".burger").click(function() {
      $(this).toggleClass("open");
      $(".menu").toggleClass("opened-menu");
    });
  };
  OnBurgerMenu();

  var onInfoServices = function() {
    $(".info-service-item").addClass("visually-hidden");
    $(".info-services__wrapper").each(function() {
      $(this).on("click", function() {
        $(this).children('.info-service-item').toggleClass("visually-hidden");
      });
    });
  };
  onInfoServices();

});
