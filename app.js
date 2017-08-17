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







$(document).ready(function(){

  clickHome();
  clickAboutMe();
  console.log( "ready!" );
});
