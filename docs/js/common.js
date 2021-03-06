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
        $(".modal-overlay").removeClass('visually-hidden');
        $("html, body").animate(
            {
                scrollTop: $("body").offset().top
            },
            2000
        );
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

            $('.jsTitle').fadeTo(1000, 1);
            $('.jsTitle').html(currentTitle);
            setTimeout(function () {
                $('.jsTitle').fadeTo(1000, 0)
            }, 5000);

            if (i <= titles.length) {
                i++;
            } else {
                i = 0;
            }

        }, 6000);

    }

    titleRotation();

    //Datepicker https://fengyuanchen.github.io/datepicker/
    $('.jsDatePicker').datepicker({
        language: 'ru-RU',
        format: 'dd.mm.yyyy',
        trigger: $('.jsCalendarBtn'),
        template: '<div class="datepicker-container dp-container">\n' +
        '  <div class="datepicker-panel dp-years" data-view="years picker">\n' +
        '    <ul class="dp-years__nav">\n' +
        '      <li data-view="years prev">&lsaquo;</li>\n' +
        '      <li data-view="years current"></li>\n' +
        '      <li data-view="years next">&rsaquo;</li>\n' +
        '    </ul>\n' +
        '    <ul data-view="years"></ul>\n' +
        '  </div>\n' +
        '  <div class="datepicker-panel dp-months" data-view="months picker">\n' +
        '    <ul class="dp-months__nav">\n' +
        '      <li data-view="year prev">&lsaquo;</li>\n' +
        '      <li data-view="year current"></li>\n' +
        '      <li data-view="year next">&rsaquo;</li>\n' +
        '    </ul>\n' +
        '    <ul data-view="months"></ul>\n' +
        '  </div>\n' +
        '  <div class="datepicker-panel dp-dates" data-view="days picker">\n' +
        '    <ul class="dp-dates__nav">\n' +
        '      <li data-view="month prev">&lsaquo;</li>\n' +
        '      <li data-view="month current"></li>\n' +
        '      <li data-view="month next">&rsaquo;</li>\n' +
        '    </ul>\n' +
        '    <ul class="dp-dates__week" data-view="week"></ul>\n' +
        '    <ul class="dp-dates__days" data-view="days"></ul>\n' +
        '  </div>\n' +
        '</div>'
    });

    //SELECT модальной формы пожертвований
    function selsec2init() {

        $('#DonationPaymentForm_reminder_period').select2({
            minimumResultsForSearch: -1,
            width: '100%',
            dropdownParent: $('#js-reminder-period')
        });

        // закостылил пока, чтобы не тратить время
        $('#DonationPaymentForm_reminder_period2').select2({
            minimumResultsForSearch: -1,
            width: '100%',
            dropdownParent: $('#js-reminder-period-2')
        });

    }

    //табы модальной формы пожертвований
    var dataTab = '';
    var dataForm = '';

    //online, sms, bank
    setDefaultForm('online');

    selsec2init();

    function setDefaultForm(name) {
        $('.jsPaymentFormWrapper').find(`[data-form='${name}']`).addClass('show');
    }

    $('.jsPaymentTypeTab').on('click', function (e) {
        e.preventDefault();
        $('.jsPaymentTypeTab').removeClass('active');
        $(this).addClass('active');

        dataTab = $(this).attr('data-tab');
        dataForm = $('.jsPaymentFormWrapper').find(`[data-form='${dataTab}']`);

        $('.jsPaymentForm').removeClass('show');
        dataForm.addClass('show');

    });

    $('.jsPeriodBtn').on('click', function () {
        $('.payment-form__wrapper-period').removeClass('show');

        dataTab = $(this).attr('data-period');
        dataForm = $('.jsPaymentFormWrapper').find(`[data-period='${dataTab}']`);

        $('.payment-form__wrapper-period').removeClass('show');
        dataForm.addClass('show');
    });

    //PHONE mask
    $('#jsPhoneMask').mask("+7 (999) 999 99 99");


    //открыть модальное пожертвования
    $('.jsOpenDonationForm').each(function() {
        $(this).on('click', function (e) {
            e.preventDefault();

            modalClose();

            var windowTopPosition = $(document).scrollTop();

            $('#modalPayment').addClass('show');
            $('#modalPayment').css({'top' : windowTopPosition + 20 + 'px'});
            $('.modal-overlay').removeClass('visually-hidden');
        });
    })

});
