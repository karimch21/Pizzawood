$(function () {

    $('.section2__item-wrap').on('click', function () {
        $('.section2__item-wrap').removeClass('active');
        $(this).addClass('active')
    })
    $('input[type="radio"]').styler();


    $(".link-up").hide();
    $(function () {
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 800) {
                $('.link-up').fadeIn();
            } else {
                $('.link-up').fadeOut();
            }
        });
        $('.link-up').on('click', function () {
            $('body,html').animate({ scrollTop: 0 }, 800);
            return false;
        });
    });

    let outputRange = document.querySelectorAll('.section3__range-output');
    $('.checks-range').ionRangeSlider({
        min: 0,
        max: 1200,
        from: 600,
        onChange: function (data) {
            outputRange[0].innerHTML = data.from.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

        },
    });
    $('.time-range').ionRangeSlider({
        min: 0,
        max: 24,
        from: 12,
        onChange: function (data) {
            outputRange[1].innerHTML = data.from.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

        },
    });

    const inputs = document.querySelectorAll(".section3__input");
    for (let el of inputs) {
        el.onpaste = (e) => e.preventDefault();
        el.addEventListener("keyup", e => {
            if (e.keyCode !== 8 && e.keyCode != 46) {
                let newValue = e.target.value.replace(/\D/g, "");
                newValue = newValue.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
                e.target.value = newValue;
            }
        });
    }

    $('.section6__slider-inner').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev slick__arrow-btn"><svg width="39" height="38" viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.00049 19.0059L37.77 18.9988" stroke="#282827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.8999 28.9053L1.00041 19.0058L10.8999 9.10628" stroke="#282827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next slick__arrow-btn"><svg width="40" height="38" viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M38.3823 18.999L1.61277 19.0061" stroke="#282827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M28.4829 9.09961L38.3824 18.9991L28.4829 28.8986" stroke="#282827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
        responsive: [
            {
                breakpoint: 1181,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                    dots: true,
                    arrows: false,

                }
            },
            {
                breakpoint: 1071,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    dots: true,
                    arrows: false,
                }
            },

        ]

    });

    let checkBtn = document.querySelectorAll('.modal__condition');
    for (let el of checkBtn) {
        el.onclick = function () {
            el.classList.toggle('checked');
        }
    }



    let tels = document.querySelectorAll('input[name="phone"]');
    let im = new Inputmask('+7 (999) 999-99-99');
    im.mask(tels);

    //form send
    var example = $('.form');
    // Успешная отправка формы

    example.on('success.sml', function () {
        // Закрыть окно через 5 сек.
        setTimeout(function () { $.fancybox.close() }, 2000);
        // Открыть динамический popup
        setTimeout(function () {
            $.fancybox.open($('.modal__thanks'));
        }, 5005);

    });
    // Ошибка при отправке AJAX-запроса
    example.on('serverError.sml', function (e, instance, form, response) {
        $.fancybox.open('<p>Ошибка при отправке AJAX-запроса!</p>' + '<br>' + response);
        setTimeout(function () { $.fancybox.close() }, 5000);
    });
    // Ошибка на сервере при отправке формы
    example.on('ajaxError.sml', function (e, instance, form, response) {
        $.fancybox.open($('.modal__error'));
        setTimeout(function () { $.fancybox.close() }, 3000);
    });
    // Инициализация...
    example.sendMail();
    // $('form.example').sendMail();
    // form send



});