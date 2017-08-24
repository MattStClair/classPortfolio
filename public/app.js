'use strict';



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
  carouselImage();
  clickHome();
  clickAboutMe();
  console.log( "ready!" );
});
