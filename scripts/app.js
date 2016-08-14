var $ = require('jquery');

$(document).ready(function () {
  $('#toggle').on('click', function () {
    $('nav ul').toggleClass('open');
  });
  $('nav li').on('click', function () {
    $('nav ul').removeClass('open');
  });
});
