"use strict";

// Dropdown footer menu
$(document).ready(function() {
  var onFooterMenu = function() {
    $(".opened-item").on("click", function(evt) {
      evt.preventDefault();
      var list = $(this).find(".open-list");
      if (list.hasClass("show") != true) {
        $(".open-list").removeClass("show");
        list.addClass("show");
      } else {
        list.removeClass("show");
      }
    });
  };
  onFooterMenu();

  var onChangeTitleColor = function() {
    $(".info-services__title").each(function() {
      $(this).on("click", function() {
        $(this).toggleClass("info-services__title--active");
      });
    });
  };
  onChangeTitleColor();

  $(window).load(function() {
    if ($(window).width() >= 1024) {
      $(".open-list").addClass("show");
    } else {
      $(".open-list").removeClass("show");
    }
  });

  $(window).resize(function() {
    if ($(window).width() >= 1024) {
      $(".open-list").addClass("show");
    } else {
      $(".open-list").removeClass("show");
    }
  });

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
        $(this)
          .children(".info-service-item")
          .toggleClass("visually-hidden");
      });
    });
  };
  onInfoServices();

  // Anchor
  $("#app-anchor").click(function() {
    $("html, body").animate(
      {
        scrollTop: $(".app").offset().top
      },
      2000
    );
  });

  // Show History Modal
  $(".jsShowHistory").click(function() {
    $(".modal__history").removeClass("visually-hidden");
    $(".modal-overlay").removeClass("visually-hidden");
  });

  $(".button__close-modal").click(function() {
    $(".modal__history").addClass("visually-hidden");
    $(".modal-overlay").addClass("visually-hidden");
  });
  $(".modal-overlay").click(function() {
    $(".modal__history").toggleClass("visually-hidden");
    $(".modal-overlay").toggleClass("visually-hidden");
  });

  // Show Book modal
  $.exitIntent("enable");
  $(document).bind("exitintent", function() {
    $(".modal__book").removeClass("visually-hidden");
  });
});
