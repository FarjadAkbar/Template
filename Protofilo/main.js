$(document).ready(function(){
    
   
    // $('.test-popup-link').magnificPopup({
    //     type: 'image',
    //     gallery:{enabled:true}
    //     // other options
    //   });

     function testimonial(){
        $('.site-main .testimonial .owl-carousel').owlCarousel({
            loop:true,
            autoplay:true,
            dots:true,
            responsive:{
                0:{
                    items:1
                },
                554:{
                    items:2
                }
            }
          });
     }
     
     let nav_offset_top=$('#header-area').height()+50;
     function navbarFixed(){
         if($('#header-area').length){
             $(window).scroll(function(){
                 let scroll=$(window).scrollTop();
                 if(scroll >= nav_offset_top){
                     $('#header-area .main-menu').addClass('navbar-fixed');
                 }else{                     
                    $('#header-area .main-menu').removeClass('navbar-fixed');
                 }
             });
         }
     }

     navbarFixed();
    //  tabs();
     testimonial();
});