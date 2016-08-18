var $ = require('jquery');
var nav = require('./nav.js');
require('jquery-cycle');

$(document).ready(function () {
  nav($);
  $('.slideshow').cycle();
});
