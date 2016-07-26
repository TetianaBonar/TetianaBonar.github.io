'use strict'
var html = $('#info').html();
var test = [
  {
    question: "Capital of Australia?",
    choices: ["Sydney", "Canberra", "Melbourne"],
    correctAnswer: "Canberra"
  }, {
    question: "Capital of New Zealand?",
    choices: ["Wellington", "Auckland", "Tauranga"],
    correctAnswer: "Wellington"
  }, {
    question: "Capital of Singapore?",
    choices: ["Jurong", "Singapore", "Bukit Batok"],
    correctAnswer: "Singapore"
  }];

localStorage.setItem('test', JSON.stringify(test));
var data = localStorage.getItem('test');
var data = JSON.parse(data);
console.log(data);

var html = $('#html').html();
var content = tmpl(html, {
  data: test
});

$('.template').append(content);


var progress = 0;

$('.check').click(function(e){

  var value = $("input:checked").val();

  var results = [];
  var results = $("input:checked").map(function(){
     return $(this).attr("value");
   })
 //   value.each (function(item) {
 //   results.push($(item).attr('value'));
 //   console.log(results);
 // });

 for (var i = 0; i < results.length; i++) {

     if ( results[i] === data[i].correctAnswer){
      progress++;
      // alert("Good one!");
     } else {
       progress;
    //  alert("Try again!");
     };
   };

  alert( "Done!" + ' ' + "You got " + progress + " correct answers!");

  });

  $('.clear').click (function(){
    progress = 0;
    $('input:checked').removeAttr('checked');
  })
