$(document).ready (function() {
  $('.stylish').mousedown(function (){
    changeCheck($(this));
  });

  $('.stylish').each(function (){
    changeCheckStart($(this));
  });

});

function changeCheck(el) {
  var el = el,
    input = el.find("input").eq(0);
  if(!input.attr("checked")) {
     el.addClass("ticked").removeClass("unticked");
     input.attr("checked", true)
  } else {
    el.addClass("unticked").removeClass("ticked");
    input.attr("checked", false)
  }
  return true;
}

function changeCheckStart(el) {
  var el = el,
    input = el.find("input").eq(0);
  if(input.attr("checked")) {
    el.addClass("ticked").removeClass("unticked");
 }
  return true;
}
