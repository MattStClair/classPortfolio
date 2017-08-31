'use strict';


$.get('/github/user/repos')
// .then(success, fail)
.then(
  // success
  data => data.forEach(repo => $('#results').append(`<p>${repo.name}</p>`)),
  // fail
  err => console.error(err.status, err.statusText, 'is the way my stuff is broken'))

$(function () {
  // Grab the template script
  var homeTemplate = $("#home-template").html();

  // Compile the template
  var theTemplate = Handlebars.compile(homeTemplate);

  // Define our data object
  var context = {
    "body": "I am good at tech stuff, it is all I care about. I am good at tech stuff, it is all I care about. I am good at tech stuff, it is all I care about. "
  };

  // Pass our data to the template
  var theHomeCompiledHtml = theTemplate(context);

  // Add the compiled html to the page
  $('.content-placeholder').html(theHomeCompiledHtml);
});

$(function () {
  // Grab the template script
  var aboutTemplate = $("#about-template").html();

  // Compile the template
  var theOtherTemplate = Handlebars.compile(aboutTemplate);

  // Define our data object
  var context2 = {
    "body": "Hello, my name is Matt St.Clair. I am an Air Force veteran and a mental health therapist, transitioning into the web development field. I am finishing a B.S. in computer applications development from Renton Technical College while also taking full stack web development courses at Codefellows code camp in Seattle. I enjoy front end as well as back end work but am especially fascinated with UX design and how it blends with my social sciences background. I also enjoy front-end work because it allows me to collaborate and create with clients"
  };

  // Pass our data to the template
  var theCompiledHtml = theOtherTemplate(context2);

  // Add the compiled html to the page
  $('.about-body').html(theCompiledHtml);
});

function clickBurger(){
  $('.hamburger').click(function(){
    $('.main-nav').show();
  });

}



function clickHome (){
  $('#home').click(function(){
    $('.techskills-body').show();
    $('.about-body').hide();
  });
}

function clickAboutMe (){

  $('#about').click(function(){
    $('.techskills-body').hide();
    $('.about-body').show();
  });
}

function carouselImage(){
  var timer = setInterval(function(){
    $('#carousel ul').animate({marginleft:-480}, 1000, function(){
      $(this).find('li:last').after($(this).find('li:first'));
      $(this).css({marginLeft:0});
    });
  },2000);
}


$(document).ready(function(){
  $('.about-body').hide();
  clickBurger();
  carouselImage();
  clickHome();
  clickAboutMe();
  console.log( "ready!" );
});
