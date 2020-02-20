var imgs= ['Assets/1.jpg', 'Assets/2.jpg', "Assets/3.jpg"];
const PAGE_TITLE = $('title').append('Konrad Rudnicki');
$('.slides-container').append(imgs.map(image => `<li><img src=${image} ></li>`));


$(document).ready(() => {

    $('#slides').superslides({
        animation: 'fade',
        play: '3000',
        pagination: false,

    });

    var typed = new Typed('.typed', {
        strings: ['<span style="color: #cc6666">full </span><span style="color: #b5bd68">stack</span>', '<span style="color: #f5871f">web </span><span style="color: #8959a8">developer</span>'],
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



    var skillsTopOffset = $('.skillsSection').offset().top;
    var statsTopOffset = $('.statsSection').offset().top;
    var countUpFinished = false;
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
                var element = $(this);
                var endVal = parseInt(element.text());

                element.countup(endVal);
            });

            countUpFinished = true;
        }

        if(window.pageYOffset > 10) {
            $('#arrow-bounce').hide();
        } else {
            $('#arrow-bounce').show();

        }
    });
    $('[data-facybox]').fancybox();


});
