"use strict";

// Dropdown menu
$(document).ready(function() {

  $(".footer-list").css({"display":"none"});

  $(".opened-item").each(function() {
    $(this).on("click", function() {
      $(this)
        .children(".open-list")
        .slideToggle(300);
    });
  });
});
