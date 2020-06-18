const imgs = ['img/slides/1.jpg', 'img/slides/4.jpg', 'img/slides/3.jpg'];
const PAGE_TITLE = $('title').text('Konrad Rudnicki');
$('.slides-container').append(imgs.map(image => `<li><img src=${image} ></li>`));

let flag = true;

const owlOptions = {
    loop: true,
    items: 4,
    dots: true,
    nav: true,
    smartSpeed: 900,
    navText: ['<i class=\'fa fa-chevron-left\'></i>', '<i class=\'fa fa-chevron-right\'></i>'],
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 2
        },
        768: {
            items: 3
        },
        938: {
            items: 4
        }
    }
};
const pieOptions = {
    easing: 'easeOut',
    barColor: '#34495e',
    trackColor: false,
    scaleColor: false,
    lineWidth: 9,
    size: 152,
    onStep: function (from, to, percent) {
        $(this.el).find('.percent').text(Math.round(percent));
    },
    animate: { duration: 3000, enabled: true }
};

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
        },
        layoutMode: 'fitRows'
    });
});

$(document).ready(() => {
    $('#slides').superslides({
        animation: 'fade',
        play: '3000',
        pagination: false

    });

    new Typed('.typed', {
        strings: ['<span style="color: #d54e53">Junior </span><span style="color: #b9ca4a">Front-End</span>', '<span style="color: #f5871f">Web </span><span style="color: #8959a8">Developer</span>'],
        typeSpeed: 50,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });

    const $owl = $('.owl-carousel');
    $owl.owlCarousel(owlOptions);

    $('#en').click(() => {
            $('.modal.fade').remove();
            $('body').append(Projects('en'));
            $('#about_me').replaceWith(about('en'));
            navlinks('en');
            experience('en');
            skillSection('en');
            projectSection('en');
            contact('en');
            filterButtons('en');
            modalButtons('en');
            $('#tl-dr').html(proclamations('en'));
            $('#skills-sec .owl-carousel').replaceWith(Skills('en'));
            $('#skills-sec .owl-carousel').owlCarousel(owlOptions);
            if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
                $('.chart').easyPieChart(pieOptions);
            }
            $('.navbar-collapse').collapse('hide');
        }
    );
    $('#pl').click(() => {
            $('.modal.fade').remove();
            $('body').append(Projects('pl'));
            $('#about_me').replaceWith(about('pl'));
            navlinks('pl');
            experience('pl');
            skillSection('pl');
            projectSection('pl');
            contact('pl');
            filterButtons('pl');
            modalButtons('pl');
            $('#tl-dr').html(proclamations('pl'));
            $('#skills-sec .owl-carousel').replaceWith(Skills('pl'));
            $('#skills-sec .owl-carousel').owlCarousel(owlOptions);
            if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
                $('.chart').easyPieChart(pieOptions);
            }
            $('.navbar-collapse').collapse('hide');
        }
    );

    const skillsTopOffset = $('.skillsSection').offset().top;

    const navbarHeight = $('#navigation').height() + 65;

    $(window).scroll(() => {

        if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
            $('.chart').easyPieChart({
                easing: 'easeOut',
                barColor: '#34495e',
                trackColor: false,
                scaleColor: false,
                lineWidth: 9,
                size: 152,
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                },
                animate: { duration: 3000, enabled: true }
            });
        }

        if (window.pageYOffset > 10) {
            $('#arrow-bounce').hide();
        } else {
            $('#arrow-bounce').show();
        }

        if ($(document).scrollTop() >= $('#about').position().top - navbarHeight) {
            $('.currentSection').removeClass('currentSection');
            $('#about-link').addClass('currentSection');
        }
        if ($(document).scrollTop() >= $('#skills').position().top - navbarHeight) {
            $('.currentSection').removeClass('currentSection');
            $('#skills-link').addClass('currentSection');
        }
        if ($(document).scrollTop() >= $('#contact').position().top - navbarHeight) {
            $('.currentSection').removeClass('currentSection');
            $('#contact-link').addClass('currentSection');
        }
        if ($(document).scrollTop() >= $('#experience').position().top - navbarHeight - 70) {
            $('.currentSection').removeClass('currentSection');
            $('#experience-link').addClass('currentSection');
            if (flag) {
                $('.skill-icon img').each(function (i, el) {
                    let $this = $(this)
                        .queue(function (next) {
                            setTimeout(function () {
                                $this.css({ 'filter': 'none' });
                            }, i * 100);
                            next();
                        })
                        .delay(500)
                        .queue(function (next) {
                            setTimeout(() => $this.removeAttr('style'), i * 100);
                            next();
                        });
                    flag = false;
                });
            }
        }
        if ($(document).scrollTop() >= $('#portfolio').position().top - navbarHeight - 70) {
            $('.currentSection').removeClass('currentSection');
            $('#portfolio-link').addClass('currentSection');
        }
        if ($(window).scrollTop() + $(window).height() >= $(document).height() - navbarHeight) {
            $('.currentSection').removeClass('currentSection');
            $('#contact-link').addClass('currentSection');
        }
        if ($(window).scrollTop() + $(window).height() >= $(document).height() - 3 * navbarHeight) {
            $('.fa-paper-plane-o').addClass('flyOutBottomLeft');
        }
        if ($(document).scrollTop() < $('#about').position().top - navbarHeight) {
            $('.currentSection').removeClass('currentSection');
            $('#home-link').addClass('currentSection');
        }
    });

    $('[data-facybox]').fancybox();

    $('#filters a').click(function () {
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

    $('#navigation .navbar-nav .navbar-link-container > a').click(function (e) {
        console.log('click');
        e.preventDefault();
        let targetElement = $(this).attr('href');
        if (targetElement === '#home') {
            $('html, body').animate({ scrollTop: 0 }, 'slow');
        } else {
            let targetPosition = $(targetElement).offset().top;

            $('html, body').animate({ scrollTop: targetPosition - 50 }, 'slow');
        }
    });

    $('#arrow-bounce a').click(function (e) {
        console.log('clicked');
        e.preventDefault();
        let targetElement = $(this).attr('href');
        let targetPosition = $(targetElement).offset().top;
        $('html, body').animate({ scrollTop: targetPosition - 70 }, 'slow');
    });

    const nav = $('#navigation');
    const navTop = nav.offset().top;

    $(window).on('scroll', stickyNavigation);

    function stickyNavigation() {
        const body = $('body');

        if ($(window).scrollTop() >= navTop) {
            body.css('padding-top', nav.outerHeight() + 'px');
            body.addClass('fixedNav');
        } else {
            body.css('padding-top', 0);
            body.removeClass('fixedNav');
        }
    }

    $('.navbar-link-container').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });
});
