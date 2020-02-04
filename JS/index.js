var imgs= ['Assets/1.jpg', 'Assets/2.jpg', "Assets/3.jpg"];
$('.slides-container').append(imgs.map(image => `<li><img src=${image} ></li>`));

$(document).ready(() => $('#slides').superslides({
    animation: 'fade',
    play: '3000',
    pagination: false,

}));


