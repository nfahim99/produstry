$(function () {
    'use strict'

    /* menu toggle toggle js start */
    $('#nav-bar-toggle').on('click', function () {
        $('#main-menu').toggleClass('active')
        $('.brand-logo').toggleClass('active')
    })
     /*   menu toggle toggle js end*/

     /* slider toggle js start */
     $('.banner-slider').slick({
        prevArrow:$('.slider-icon.left'),
        nextArrow:$('.slider-icon.right'),
     })
      /*   slider toggle js end*/

      /* counterup toggle js start */
      $('.counter').counterUp();
        /* counterup toggle js end*/
       
       /* blog slide js start */
       $('.blog-slide').slick({
        slidesToShow:3,
        centerMode:true,
        centerPadding: '0px',
        arrows: false
       })
       /* blog slide js end */

       $('.test-content').slick({
        asNavFor: '.test-review',
        arrows: false
       })

       $('.test-review').slick({
        slidesToShow:3,
        centerMode: true,
        centerPadding: '0px',
        asNavFor: '.test-content',
        prevArrow:$('.slider-icon.left'),
        nextArrow:$('.slider-icon.right'),
       })

    })

