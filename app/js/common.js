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

    // var onChangeTitleColor = function () {
    //     $(".info-services__title").each(function () {
    //         $(this).on("click", function () {
    //             $(this).toggleClass("info-services__title--active");
    //         });
    //     });
    // };
    // onChangeTitleColor();

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

    // var onInfoServices = function() {
    //   $(".info-service-item").addClass("visually-hidden");
    //
    //   $(".info-services__wrapper").each(function() {
    //     $(this).on("click", function() {
    //       $(this)
    //         .children(".info-service-item")
    //         .toggleClass("visually-hidden");
    //     });
    //   });
    // };
    //
    // onInfoServices();

    // Anchor
    $("#app-anchor").click(function () {
        $("html, body").animate(
            {
                scrollTop: $(".app").offset().top
            },
            2000
        );
    });

    // Show History Modal
    // $(".jsShowHistory").click(function () {
    //     $(".modal__history").addClass("show");
    //     $(".modal-overlay").removeClass("visually-hidden");
    // });
    //
    // $(".button__close-modal").click(function () {
    //     $(".modal__history").addClass("visually-hidden");
    //     $(".modal-overlay").addClass("visually-hidden");
    // });
    // $(".modal-overlay").click(function () {
    //     $(".modal__history").toggleClass("visually-hidden");
    //     $(".modal-overlay").toggleClass("visually-hidden");
    // });

    // Show Book modal
    // $.exitIntent("enable");
    // $(document).bind("exitintent", function () {
    //     $(".modal__book").removeClass("visually-hidden");
    // });

// alex m - переключение пунктов "Информационные сервисы"

    //mob
    $('.jsInfoBtn').on('click', function () {
        if ($(this).children('.info-service-item').hasClass('visually-hidden')) {
            $('.info-service-item').addClass('visually-hidden');
            $('.jsInfoBtn').removeClass('active');
            $(this).children('.info-service-item').removeClass('visually-hidden');
            $(this).addClass('active');
        } else {
            $('.jsInfoBtn').removeClass('active');
            $(this).children('.info-service-item').addClass('visually-hidden');
        }
    });

    //desk
    var infoItem = $('.info-desktop__item');
    var infoItemContent = $('.info-desktop__right-outer');

    infoItem.on('click', function () {

        infoItem.removeClass('active');
        infoItemContent.removeClass('active');

        var infoItemDataValue = $(this).attr('data-info')
        var infoItemData = '[data-info=' + infoItemDataValue + ']';

        $(infoItemData).addClass('active');
    });

    $('.jsChannelSubscribe').on('click', function (e) {
        e.preventDefault();
        $('.jsIconBell').addClass('active');
    });

    $('.jsModalExitBtn').on('click', function (e) {
        e.preventDefault();
        $('.jsModalExit').addClass('show');
        $('.modal-overlay').removeClass('visually-hidden');
    })

    $('.modal-overlay').on('click', function () {
        modalClose();
    });

    $('.jsModalCloseBtn').on('click', function (e) {
        e.preventDefault();
        modalClose();
    });

    $(".jsShowHistory").click(function (e) {
        e.preventDefault();
        $(".modal__history").addClass("show");
        $(".modal-overlay").removeClass("visually-hidden");
    });

    function modalClose() {
        $('.modal').removeClass('show');
        $('.modal-overlay').addClass('visually-hidden');
    }

    function toSwitchTitle() {

    }

    //title rotation
    function titleRotation() {

        var titles = [
            'Благотворительный Фонд',
            'Воскресная школа онлайн',
            'Единый личный кабинет священнослужителя',
            'Интернет-магазин',
            'Миссионерский YouTube канал',
            'Моб. Приложения Православный Календарь и Мессенджер'
        ];

        var i = 1;

        setInterval(function () {
            var currentTitle = titles[i];

            $('.jsTitle').fadeTo( 1000, 1 );
            $('.jsTitle').html(currentTitle);
            setTimeout(function() {
                $('.jsTitle').fadeTo( 1000, 0 )
            }, 4000);

            if (i <= titles.length) {
                i++;
            } else {
                i = 0;
            }
            
        }, 6000);

    }

    titleRotation();

});
