// Slider Carousel
document.addEventListener('DOMContentLoaded', function () {
    var owlCarousel = document.querySelector('.slider_carousel');
    
    if (owlCarousel) {
        $(owlCarousel).owlCarousel({
            items: 1,
            loop: true,
            center: true,
            margin: 0,
            padding: 0,
            autoplay: true,
            autoplayTimeout: 3500,
            responsiveClass: true,
            dots: false,
            nav: false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        });
    }
});




