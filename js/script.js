$(document).ready(function(){
    $('.carousel').owlCarousel({
        items:1,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:1500,
        autoplayHoverPause:true,
    });
    $('.carousel-2').owlCarousel({
        items:5,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:1500,
        autoplayHoverPause:true,
        responsive : {
            768 : {
            items:3,  
            autoplay:true,
            }
        }
    });
});