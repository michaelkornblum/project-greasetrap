module.exports = function ($) {

    $('#toggle').on('click', function () {
      $('nav ul').toggleClass('open');
    });

    $('#video-list').on('click', function (evt) {
      evt.preventDefault();
      $('#video-links').toggleClass('show');
    });

}
