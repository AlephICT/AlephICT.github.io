// navigation

$(window).scroll(function() {
  if ($(document).scrollTop() > 100) {
    $("nav").addClass("nav-show");
  } else if ($(window).width() < 620) {
    $("nav").addClass("nav-show");
  } else {
    $("nav").removeClass("nav-show");
  }
});

$(window).ready(function() {
  if ($(window).width() < 620) {
    $("nav").addClass("nav-show");
  }
});


$("#show-nav-big").click(function() {
  $(".nav-big-mob").css({ display: "grid" });;
});

$("#hide-nav-big").click(function() {
  $(".nav-big-mob").hide();
});

$("#nav-links")
  .children()
  .click(function() {
    $(".nav-big-mob").hide();
  });

$("#nav-social")
  .children()
  .click(function() {
    $(".nav-big-mob").hide();
  });

// Links

$(".goCourse").click(function() {
  if ($(window).width() > 620) {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $(".course").offset().top - 45
      },
      1000
    );
  } else {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $(".course-mob").offset().top - 45
      },
      1000
    );
  }
});

$(".goGallery").click(function() {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $(".gallery").offset().top - 45
    },
    1000
  );
});

$(".goFaq").click(function() {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $(".faq").offset().top - 45
    },
    1000
  );
});

$(".goRegistration").click(function() {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $(".registration").offset().top - 45
    },
    1000
  );
});

$(".goPrice").click(function() {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $(".price").offset().top - 45
    },
    1000
  );
});

$(".goCompany").click(function() {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $(".company").offset().top - 45
    },
    1000
  );
});

$(".goCompany").click(function() {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $(".company").offset().top - 45
    },
    1000
  );
});

$(".goGallery").click(function() {
  if ($(window).width() > 620) {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $(".gallery").offset().top - 45
      },
      1000
    );
  } else {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $(".gallery-mob").offset().top - 45
      },
      1000
    );
  }
});

$(".goContact").click(function() {
  if ($(window).width() > 820) {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $(".contact").offset().top - 45
      },
      1000
    );
  } else if ($(window).width() > 620) {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $(".contact-tablet").offset().top - 45
      },
      1000
    );
  } else {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $(".contact-mob").offset().top - 45
      },
      1000
    );
  }
});

// Question

$(document).ready(function() {
  $(".question")
    .next()
    .hide();
});

$(".question")
  .children(".answer-button")
  .click(function() {
    if (
      $(this)
        .parent(".question")
        .next()
        .is(":hidden")
    ) {
      $(this)
        .parent(".question")
        .next()
        .show();
    } else {
      $(this)
        .parent(".question")
        .next()
        .hide();
    }
  });

//Experiences

var studentId = 3;

$(document).ready(loadStudent(studentId));

function loadStudent(x) {
  $(".student-text").hide();
  $("#" + x + ".student-text").show();
  $(".student-name").hide();
  $("#" + x + ".student-name").show();
  $(".student-img")
    .children()
    .css({ opacity: "0.3" });
  $("#" + x + ".student-img")
    .children()
    .css({ opacity: "1" });
}

$("#pre-student").click(function() {
  if (studentId != 1) {
    studentId = studentId - 1;
  } else {
    studentId = 5;
  }
  loadStudent(studentId);
});

$("#next-student").click(function() {
  if (studentId != 5) {
    studentId = studentId + 1;
  } else {
    studentId = 1;
  }
  loadStudent(studentId);
});

// Gallery

var pageOfGallery = 1;
var warningLastPage = 0;

$(document).ready(loadPhoto(pageOfGallery));

function loadPhoto() {
  from = pageOfGallery * 9 - 8;
  to = pageOfGallery * 9;

  $(".gallery-img")
    .parent()
    .hide();

  for (i = from; i <= to; i++) {
    $(".gallery-img." + i)
      .parent()
      .show();
    if (!$(".gallery-img." + i).length) {
      warningLastPage = 1;
    }
  }

  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $(".gallery").offset().top - 45
    },
    200
  );


}

$("#gallery-pre-page").click(function() {
  if (pageOfGallery == 1) {
    return;
  }
  pageOfGallery = pageOfGallery - 1;
  loadPhoto();
});

$("#gallery-next-page").click(function() {
  if (warningLastPage) {
    warningLastPage = 0;
    loadPhoto();
    return;
  }
  pageOfGallery = pageOfGallery + 1;
  loadPhoto();
});



$(".frame-extension").click(function(){
  if($(this).hasClass('frame-x')){
    $(this).removeClass("frame-x");
    $(this).removeClass("frame-x-v");
    $(this).parent().css('min-height', '0');
  }else{
  $(this).addClass("frame-x");
  $(".frame-x").parent().css('min-height', '500px');
  var image = new Image();
  image.src = $(this).children().attr("src");
  image.onload = function() {
  console.log('height: ' + this.height + ' width' +  this.width);
    if(this.height >= this.width){
      console.log('vece')
      $('.frame-x').addClass("frame-x-v");
    }};
  }
});


//scroll company footer
var size = 0;
var rightLeft = true;
right = 0;
left = 0
animation = true;
var refreshId;

$(document).ready(function() {
    var b = 1;
    while ($("#" + b + ".scrollscroll").width() != null) {
        size = size + $("#" + b + ".scrollscroll").width();
        b = b + 1;
      }
    size = size + 150;
});

$(document).ready(function() {
  var refreshId = setInterval(function() {
    
    if(!animation){
      return;
    }

    mm = $(window).width() / 2;
    max = Math.ceil(size / mm);

    if(rightLeft){
        $("#scroll-company").animate({ scrollLeft: "+=" + mm }, 4000);
        right = right + 1;
        if(right == max){
            rightLeft = false;
            right = 0;
        }

    }else{
        $("#scroll-company").animate({ scrollLeft: "-=" + mm }, 4000);
        left = left + 1;
        if(left == max){
            rightLeft = true;
            left = 0;
        }
    }
    }, 2000);

});

$("#scroll-right").click(function() {
  animation = false;
  mm = $(window).width() / 8;
 $("#scroll-company").animate({ scrollLeft: "+=" + 50 }, 100);
});

$("#scroll-left").click(function() {
  mm = $(window).width() / 8;
  $("#scroll-company").animate({ scrollLeft: "-=" + 50 }, 100);
  animation = false
});

function goRight(){
  animation = false;
  $("#scroll-company").animate({ scrollLeft: "+=" + 4 }, 1);
}

function goLeft(){
  animation = false;
  $("#scroll-company").animate({ scrollLeft: "-=" + 4 }, 1);
}

$('#scroll-right').hover(function() {
  int = setInterval(goRight, 10);
  },
  function() {clearInterval(int);
}
);

$('#scroll-left').hover(function() {
  int = setInterval(goLeft, 10);
  },
  function() {clearInterval(int);
}
); 








