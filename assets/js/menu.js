$(document).ready(function(){

  /* Main menu resize */

  if ($(window).width() >= 751)
       $(".menu-services").height($(".wrapper").height() - $("header").height() - $("footer").height());

  $(window).resize(function(){
    if ($(window).width() >= 751)
       $(".menu-services").height($(".wrapper").height() - $("header").height() - $("footer").height());
    else $(".menu-services").css("height","auto");
  });

  /* Services menu toggle */
  $(".services-toggle").click(function(){ $(".services-menu").slideToggle(); $j(".services-toggle").toggleClass("expanded");});


});
