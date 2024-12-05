
(function ($) {
	'use strict';
	
	jQuery(document).ready(function () {

        //Sticky menu add class
        $(window).scroll(function() {    
            var scroll = $(window).scrollTop();

            if (scroll >= 150) {
                $(".header").addClass("sticky");
            } else {
                $(".header").removeClass("sticky");
            }
        });

        $(".typed-element").typed({
            stringsElement: $(".typed-strings"),
            typeSpeed: 100,
            loop: true,
            showCursor: true,
            backDelay: 2000,
            fadeOut: true,
            smartBackspace: true,
            cursorChar: "|"
        });

        //Smooth Scroll To Anchor
        $(document).on('click', 'a[href^="#"]', function (event) {
            var top;
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 100
            }, 1000);
            event.preventDefault();
        });

        // Mixitup Portfolio
        $('#filters').on( 'click', 'li', function() {
          var filterValue = $( this ).attr('data-filter');
        });
        $('#portfoliolist').mixItUp({
            selectors: {
                target: '.portfolio',
                filter: '.filter' 
            },
            load: {
                filter: '*'  
            }     
        });  

 	});
	
})(jQuery);
