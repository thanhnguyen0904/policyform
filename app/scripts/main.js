/* eslint-env browser */
(function ($) {
    'use strict'

    $(document).ready(function () {

        $('.toggle-menu,.btn-close').click((e) => {
            $('.navbar-menu-mobile').toggleClass('opened')
            $('body').toggleClass('noscroll')
        })

        $('.navbar-menu-mobile .navbar-menu-mobile-item.has-dropdown').click((e) => {
            let ele = $(e.currentTarget)
            ele.parent().find('.navbar-menu-mobile-item').not(ele).removeClass('opened')
            ele.toggleClass('opened')
        })

    })

})(jQuery)
