$(document).ready (function() {
    // $('.jcarousel').jcarousel('scroll', target);

    $('.jcarousel').jcarousel({
          // Core configuration goes here
      });

      $('.jcarousel-prev').jcarouselControl({
          target: '-=1'
      });

      $('.jcarousel-next').jcarouselControl({
          target: '+=1'
      });



      $('.menu li').hover (function(){
        $(this).children('ul').slideToggle();
      });

      //  var $link = $('.menu_link');
      //  $link.mouseenter(function (){
      //    $(this).siblings('.submenu').show('slow');
      //      $('.submenu').mouseleave (function (){
      //        $('.submenu').slideUp();
      //      });
      //    });
       //
      //    $('.submenu_link').mouseenter (function (){
      //        $(this).siblings('.submenu-2').show();
      //          $('.submenu-2').mouseleave (function (){
      //            $(this).slideUp();
      //          })
      //     });
       //
      //    $('submenu-2_link').mouseenter (function(){
      //       $(this).siblings('.submenu_3').show();
      //       $('.submenu-3').mouseleave (function (){
      //         $(this).slideUp();
      //       })
      //    });


        $("select").uniform();

    });
