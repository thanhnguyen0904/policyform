/* eslint-env browser */
(function ($) {
  'use strict'

  $(document).ready(function () {

      $('.btn-toggle').click((e) => {
          $('.btn-toggle').removeClass('active')
          $(e.currentTarget).addClass('active')
          $('.for-trip').toggleClass('active')
      })

      $('.input input').focus(function() {
          $(this).parents('.input').addClass('focus')
          if($(this).parents('.input').hasClass('has-dropdown')) {
              $(this).parent().siblings('.input-dropdown').addClass('active')
              $(this).siblings('.fa-chevron-down').addClass('active')
          }
      }).blur(function() {
          if(!$(this).val()){
              $(this).parents('.input').removeClass('focus')
              if($(this).parents('.input').hasClass('has-dropdown')) {
                  $(this).parent().siblings('.input-dropdown').removeClass('active')
                  $(this).siblings('.fa-chevron-down').removeClass('active')
              }
          }
      });

      $('.input-dropdown').on('mousedown', function(e) {
          e.preventDefault()
      }).on('click', '.input-dropdown-item', function() {
          if($(this).hasClass('active'))
              return false;
          $(this).parent().find('.input-dropdown-item').removeClass('active')
          $(this).addClass('active')
          $(this).parents('.input').addClass('focus')
          $(this).parents('.input').find('input').val($(this).text())
          $(this).parent().siblings('.input-holder').find('.fa-chevron-down').removeClass('active')
          $(this).parent().removeClass('active')
          $(this).parents('.input').find('input').trigger('blur')
      });

      $('.age-range-holder .fa').click((e) => {

          let ele = $(e.target)
          let value = ele.siblings('.age-range-number').text()

          if(ele.hasClass('fa-plus')){
              if(value >= ele.parent().data('max'))
                  return false
              value = parseInt(value) + 1
          } else if(ele.hasClass('fa-minus')) {
              console.log('123')
              if(value <= ele.parent().data('min'))
                  return false
              value = parseInt(value) - 1
          }
          ele.siblings('input').val(value)
          ele.siblings('.age-range-number').text(value)

      })

      $('input.daterange').daterangepicker({
          startDate: moment(),
          endDate: moment(),
          locale: {
              format: 'Y MMM DD'
          },
          autoApply: true
      }, function(start, end, label) {
          $('.daterange-from').val(start.format('Y MMM DD'))
          $('.daterange-to').val(end.format('Y MMM DD'))
      });

      let $datetime = $('.datetime')
      $datetime.daterangepicker({
          singleDatePicker: true,
          showDropdowns: true,
          locale: {
              format: 'Y MMM DD'
          }
      }, function(start, end, label) {
          $datetime.val(start.format('Y MMM DD'))
      })

      let $datetimeBirthday = $('.birthday')
      $datetimeBirthday.daterangepicker({
          singleDatePicker: true,
          showDropdowns: true,
          autoUpdateInput: true,
          maxDate: moment(),
          locale: {
              format: 'Y MMM DD'
          }
      }, function(start,end,label) {
          $datetimeBirthday.val(start.format('Y MMM DD'))
          console.log($datetimeBirthday.val())
      })

    let trustedPartnersSlick = $('.trusted-insurance-slick').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
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
    })

    $('.go-next').click(() => {
      trustedPartnersSlick.slick('slickNext')
    })

    $('.go-prev').click(() => {
        trustedPartnersSlick.slick('slickPrev')
    })

  })
})(jQuery)
