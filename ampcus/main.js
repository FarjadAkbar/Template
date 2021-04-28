$(document).ready(function(){
    $('.custom-security .owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        dots:true,
        responsive:{            
            0:{
                items:1
            },
            554:{
                items:3
            }
        }
    });

    $('.trusted-by .owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        dots:true,
        responsive:{            
            0:{
                items:1
            },
            554:{
                items:7
            }
        }
    });
});