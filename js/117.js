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


// Links

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


// Question

$( document ).ready(function() {
    $(".question").next().hide();
});


$(".question").children(".answer-button").click(function() {

    if($(this).parent(".question").next().is(":hidden")){
        $(this).parent(".question").next().show();
    }else{
        $(this).parent(".question").next().hide();
    }
});


//Experiences

var studentId = 3;

$( document ).ready( loadStudent(studentId));

function loadStudent(x) {
    $(".student-text").hide();
    $("#" + x + ".student-text").show();
    $(".student-name").hide();
    $("#" + x + ".student-name").show();
    $(".student-img").children().css({ opacity: "0.3" });
    $("#" + x + ".student-img").children().css({ opacity: "1" });   
}

$( "#pre-student" ).click(function() {
    if(studentId != 1){
        studentId = studentId - 1;
    }else{
        studentId = 5;
    }
    loadStudent(studentId);
});

$( "#next-student" ).click(function() {
    if(studentId != 5){
        studentId = studentId + 1;
    }else{
        studentId = 1;
    }
    loadStudent(studentId);
});


// Gallery

var pageOfGallery = 1;
var warningLastPage=0

$( document ).ready( loadPhoto(pageOfGallery));


function loadPhoto() {
    from = pageOfGallery * 9 - 8 ;
    to = pageOfGallery * 9;

    $(".gallery-img").parent().hide();

    for(i = from; i <= to; i++){
        $(".gallery-img." + i).parent().show();
        if(!$(".gallery-img." + i).length){
            warningLastPage=1;
        }
    }
}


$( "#gallery-pre-page").click(function() {
    if(pageOfGallery == 1){
        return
    }
    pageOfGallery = pageOfGallery - 1;
    loadPhoto();
});

$("#gallery-next-page").click(function() {
    if(warningLastPage){
        warningLastPage = 0;
        loadPhoto();
        return
    }
    pageOfGallery = pageOfGallery + 1;
    loadPhoto();
});
















