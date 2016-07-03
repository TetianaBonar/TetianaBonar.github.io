$(document).ready (function() {
  $('.jcarousel').jcarousel({
          // Core configuration goes here
      });

   $(".banners_menu").accordion();

  //  $(".services_pic").mouseenter(function() {
  //    $(this).siblings(".services_text").toggleClass("active_caption");
  //    $(this).siblings(".hover_image").fadeToggle();
  //  })


  //  $(".services_pic").hover(function() {
  //    $(this).siblings(".services_text").toggleClass("active_caption");
  //    $(this).siblings(".hover_image").fadeToggle();
  //  })

   //
   $(".services_pic").mouseenter (function() {
     $(this).siblings(".services_text").addClass("active_caption");
     $(this).siblings(".hover_image").fadeIn();
   })

   $(".services_pic").mouseleave (function() {
     $(this).siblings(".services_text").removeClass("active_caption");
     $(this).siblings(".hover_image").fadeOut();
   })



});
