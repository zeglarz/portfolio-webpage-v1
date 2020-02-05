var imgs= ['Assets/1.jpg', 'Assets/2.jpg', "Assets/3.jpg"];
$('.slides-container').append(imgs.map(image => `<li><img src=${image} ></li>`));

$(document).ready(() => {

    $('#slides').superslides({
        animation: 'fade',
        play: '3000',
        pagination: false,

    });

    var typed = new Typed('.typed', {
        strings: ['Full Stack.', 'Web Developer.'],
        typeSpeed: 70,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        items: 4,
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
        }
    });



    var skillsTopOffset = $('.skillsSection').offset().top;
    $(window).scroll(() => {

        if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
            $('.chart').easyPieChart({
                easing: 'easeOut',
                barColor: '#34495e',
                trackColor: false,
                scaleColor: false,
                lineWidth: 9,
                size: 152,
                onStep: function(from, to ,percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                },
                animate: { duration: 3000, enabled: true }
            });
        }
    })

});

