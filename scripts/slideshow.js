module.exports = function ($) {
  function showSlide(num) {
    slides.eq(num).show();
  }

  function hideSlides() {
    slides.hide();
  }

  var i = 0;
  var slides = $('.slideshow img');
  console.log(slides.length);

}
