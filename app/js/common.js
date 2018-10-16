"use strict";

// Dropdown footer menu
$(document).ready(function () {
    var onFooterMenu = function () {
        $(".opened-item").on("click", function (evt) {
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

    var onChangeTitleColor = function () {
        $(".info-services__title").each(function () {
            $(this).on("click", function () {
                $(this).toggleClass("info-services__title--active");
            });
        });
    };
    onChangeTitleColor();

    $(window).load(function () {
        if ($(window).width() >= 1024) {
            $(".open-list").addClass("show");
        } else {
            $(".open-list").removeClass("show");
        }
    });

    $(window).resize(function () {
        if ($(window).width() >= 1024) {
            $(".open-list").addClass("show");
        } else {
            $(".open-list").removeClass("show");
        }
    });

    // Dropdown header menu
    var OnBurgerMenu = function () {
        $(".burger").on("click", function () {
            $(".drop-menu").slideToggle(300);
            $(".drop-menu").css("display", "flex");
        });

        // Burger animation
        $(".burger").click(function () {
            $(this).toggleClass("open");
            $(".menu").toggleClass("opened-menu");
        });
    };
    OnBurgerMenu();

    var onInfoServices = function () {
        $(".info-service-item").addClass("visually-hidden");
        $(".info-services__wrapper").each(function () {
            $(this).on("click", function () {
                $(this)
                    .children(".info-service-item")
                    .toggleClass("visually-hidden");
            });
        });
    };
    onInfoServices();


// Anchor
    $("#app-anchor").click(function () {
        $('html, body').animate({
            scrollTop: $(".app").offset().top
        }, 2000);
    });

    //Datepicker https://fengyuanchen.github.io/datepicker/
    $(window).load(function () {
        if ($(window).width() >= 1024) {
            $('.jsDatePicker').datepicker({
                language: 'ru-RU',
                format: 'dd.mm.yyyy',
                date: new Date(1980, 1, 1),
                trigger: $('.jsCalendarBtn'),
            });
        } else {

            $('.patron-form__label--calendar-thumb').find('.jsDatePicker').each(function() {
                $("<input type='date' class=\"jsDatePicker patron-form__input patron-form__input--date patron-form__input--date-mob\" placeholder=\"01.01.1980\" onfocus=\"this.placeholder=''\" onblur=\"this.placeholder = '01.01.1980'\" required/> ").insertBefore(this);
            }).remove();
        }
    });

});