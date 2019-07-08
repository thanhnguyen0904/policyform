/* eslint-env browser */
(function ($) {
  'use strict'

  $(document).ready(function () {

    let trustedPartnersSlick = $('.trusted-partners-slick').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 413,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $('.go-next').click(() => {
      trustedPartnersSlick.slick('slickNext')
    })

    $('.go-prev').click(() => {
        trustedPartnersSlick.slick('slickPrev')
    })

  })
})(jQuery)
