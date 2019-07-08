/* eslint-env browser */
(function ($) {
  'use strict'

  $(document).ready(function () {
    $('#home-1 .carousel-control .car-con-left').on('click', function() {
      $('#home-1 .carousel').carousel('prev');
    })
    $('#home-1 .carousel-control .car-con-right').on('click', function() {
      $('#home-1 .carousel').carousel('next');
    })
  })
})(jQuery)
