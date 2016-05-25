$(document).ready (function() {
    $('input').hover (function() {
     $(this).siblings("span").toggle();
    });

    $('.tab1').click (function(e) {
      $('#tab_1').addClass('active').siblings('div').removeClass('active');
      e.preventDefault();
    });

    $('.tab2').click (function() {
      $('#tab_2').addClass('active').siblings('div').removeClass('active');
      e.preventDefault();
    });

    $('.tab3').click (function() {
      $('#tab_3').addClass('active').siblings('div').removeClass('active');
      e.preventDefault();
    });

    // $('.tabs .tab-links a').on('click', function(e) {
    //   var currentAttrValue = $(this).attr('href');
    //
    //   $('.tabs' + currentAttrValue).fadeIn(400).siblings().hide();
    //
    //   $(this).parent('li').addClass('active').siblings().removeClass('active');
    //
    //   e.preventDefault();
    //
    // });
});
