$(window).scroll( function(){
    if($(document).scrollTop() > 100){
        $('nav').addClass('nav-show');
    }else if($(window).width() <620){
        $('nav').addClass('nav-show');
    }
    else{
        $('nav').removeClass('nav-show');
    }

})

$( document ).ready(function() {
    $(".nav-big-mob").hide();
});

$("#show-nav-big").click(function(){
    $(".nav-big-mob").show();
});

$("#hide-nav-big").click(function(){
    $(".nav-big-mob").hide();
});

$("#nav-links").children().click(function(){
    $(".nav-big-mob").hide();
});

$("#nav-social").children().click(function(){
    $(".nav-big-mob").hide();
});

$( ".goCourse" ).click(function() {
    if($(window).width() >620){
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".course").offset().top-45
        }, 2000);
    }else{
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".course-mob").offset().top-45
        }, 2000);
    }
});

$( ".goGallery" ).click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".gallery").offset().top-45
    }, 2000);
});

$( ".goFaq" ).click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".faq").offset().top-45
    }, 2000);
});

$( ".goPrice" ).click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".price").offset().top-45
    }, 2000);
});

$( ".goCompany" ).click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".company").offset().top-45
    }, 2000);
});

$( ".goCompany" ).click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".company").offset().top-45
    }, 2000);
});

$( ".goGallery" ).click(function() {
    if($(window).width() >620){
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".gallery").offset().top-45
        }, 2000);
    }else{
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".gallery-mob").offset().top-45
        }, 2000);
    }
});

$( ".goContact" ).click(function() {
    if($(window).width() >820){
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".contact").offset().top-45
        }, 2000);

    }else if($(window).width() >620){
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".contact-tablet").offset().top-45
        }, 2000);
    }else{
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".contact-mob").offset().top-45
        }, 2000);
    }
});









