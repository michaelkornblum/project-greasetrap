var $ = require('jquery');
var nav = require('./nav.js');
var slideshow = require('./slideshow');

$(document).ready(function () {
  nav($);
  slideshow($);
});
