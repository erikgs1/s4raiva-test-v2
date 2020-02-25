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
            320 : {
                items:2,  
                autoplay:true,
                },
            720 : {
                items:3,  
                autoplay:true,
                },
            900 : {
            items:4,  
            autoplay:true,
            },
            1024 : {
                items:5,  
                autoplay:true,
                }
        }
    });
});