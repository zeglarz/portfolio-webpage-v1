var imgs= ['Assets/1.jpg', 'Assets/2.jpg', "Assets/3.jpg"];
const PAGE_TITLE = $('title').append('Konrad Rudnicki');
$('.slides-container').append(imgs.map(image => `<li><img src=${image} ></li>`));
$(window).on('load', function () {
    $('.loader .inner').fadeOut(500, function () {
        $('.loader').fadeOut(750);
    });
    $('.items').isotope({
        filter: '*',
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    });
});

$(document).ready(() => {

    $('#slides').superslides({
        animation: 'fade',
        play: '3000',
        pagination: false,

    });

    var typed = new Typed('.typed', {
        strings: ['<span style="color: #d54e53">full </span><span style="color: #b9ca4a">stack</span>', '<span style="color: #f5871f">web </span><span style="color: #8959a8">developer</span>'],
        typeSpeed: 50,
        loop: true,
        startDelay: 1000,
        showCursor: false,


    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        items: 4,
        dots: true,
        nav: true,
        smartSpeed: 900,
        navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:4
            }
        },

    });



    const skillsTopOffset = $('.skillsSection').offset().top;
    const statsTopOffset = $('.statsSection').offset().top;
    let countUpFinished = false;
    const navbarHeight = $("#navigation").height() + 55;

    $(window).scroll(() => {

        if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
            $('.chart').easyPieChart({
                easing: 'easeOut',
                barColor: '#34495e',
                trackColor: false,
                scaleColor: false,
                lineWidth: 9,
                size: 152,
                onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                },
                animate: { duration: 3000, enabled: true }
            });
        }

        if (!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) {
            $(".counter").each(function () {
                let element = $(this);
                let endVal = parseInt(element.text());

                element.countup(endVal);
            });

            countUpFinished = true;
        }

        if(window.pageYOffset > 10) {
            $('#arrow-bounce').hide();
        } else {
            $('#arrow-bounce').show();

        }
            if ($(document).scrollTop() >= $("#about").position().top - navbarHeight) {
                $('.currentSection').removeClass('currentSection');
                $("#about-link").addClass("currentSection");
            }

            if ($(document).scrollTop() >= $("#skills").position().top - navbarHeight) {
                $('.currentSection').removeClass('currentSection');
                $("#skills-link").addClass("currentSection");
            }

            if ($(document).scrollTop() >= $("#stats").position().top - navbarHeight) {
                $('.currentSection').removeClass('currentSection');
                $("#stats-link").addClass('currentSection');
            }
        if ($(document).scrollTop() >= $("#contact").position().top - navbarHeight) {
            $('.currentSection').removeClass('currentSection');
            $("#contact-link").addClass('currentSection');
        }
        if ($(document).scrollTop() >= $("#portfolio").position().top - navbarHeight - 80) {
            $('.currentSection').removeClass('currentSection');
            $("#portfolio-link").addClass('currentSection');
        }
        if ($(document).scrollTop() < $("#about").position().top - navbarHeight) {
            $('.currentSection').removeClass('currentSection');
            $("#home-link").addClass('currentSection');

        }


        });
    $('[data-facybox]').fancybox();

    $('#filters a').click(function() {
         $('#filters .current').removeClass('current');
         $(this).addClass('current');

         let selector = $(this).attr('data-filter');

        $('.items').isotope({
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false
            }
        });
        return false;

    });

    $('#navigation .navbar-nav a').click(function(e) {
        e.preventDefault();
        let targetElement = $(this).attr('href');
        if (targetElement === '#home')  {
            $("html, body").animate({ scrollTop: 0 }, "slow");
        } else {
            let targetPosition = $(targetElement).offset().top;

            $('html, body').animate({scrollTop: targetPosition - 50}, "slow");
        }
    });

    const nav = $('#navigation');
    const navTop = nav.offset().top;

    $(window).on('scroll', stickyNavigation);

    function stickyNavigation() {
        const body = $('body');

        if($(window).scrollTop() >= navTop) {
            body.css('padding-top', nav.outerHeight() + 'px');
            body.addClass('fixedNav');
        } else {
            body.css('padding-top', 0);
            body.removeClass('fixedNav');
        }
    }

    $('.nav-link').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });

});
