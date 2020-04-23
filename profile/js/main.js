/*  ---------------------------------------------------
    Template Name: Phozogy
    Description:  Phozogy photography HTML Template
    Author: Colorlib
    Author URI: https://colorlib.com
    Version: 1.0
    Created: Colorlib
---------------------------------------------------------  */

'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    // Search model
    $('.search-switch').on('click', function () {
        $('.search-model').fadeIn(400);
    });

    $('.search-close-switch').on('click', function () {
        $('.search-model').fadeOut(400, function () {
            $('#search-input').val('');
        });
    });

    // Isotppe Filter
    $(".filter-controls li").on('click', function() {
        var filterData = $(this).attr("data-filter");

        $(".portfolio-filter, .gallery-filter").isotope({
            filter: filterData,
        });

        $(".filter-controls li").removeClass('active');
        $(this).addClass('active');
    });

    $(".portfolio-filter, .gallery-filter").isotope({
        itemSelector: '.pf-item, .gf-item',
        percentPosition: true,
        masonry: {
        // use element for option
        columnWidth: '.pf-item, .gf-item',
        horizontalOrder: true,
      }
    });

    //Masonary
    $('.portfolio-details-pic').masonry({
        itemSelector: '.pdp-item',
        columnWidth: '.pdp-item'
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*------------------
        Carousel Slider
    --------------------*/
    var hero_s = $(".hs-slider");
    hero_s.owlCarousel({
        loop: false,
        margin: 0,
        nav: false,
        items: 1,
        dots: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        // navText: ['<span class="arrow_carrot-left"></span>', '<span class="arrow_carrot-right"></span>'],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: false
    });

    /*------------------
        Team Slider
    --------------------*/
    $(".categories-slider").owlCarousel({
        loop: true,
        margin: 20,
        items: 3,
        dots: false,
        nav: true,
        navText: ['<span class="arrow_carrot-left"></span>', '<span class="arrow_carrot-right"></span>'],
        stagePadding: 120,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
                stagePadding: 0
            },
            768: {
                items: 2,
                stagePadding: 0
            },
            992: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });

    /*------------------
        Image Popup
    --------------------*/
    $('.image-popup').magnificPopup({
        type: 'image'
    });

    /*------------------
        Video Popup
    --------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });

})(jQuery);

//edit categories

let pe = document.getElementById('photo-editing');
let ve = document.getElementById('video-editing');
let pd = document.getElementById('print-designs');
let ga = document.getElementById('graphic-arts');
// let id = document.getElementById('interior-design');
// let il = document.getElementById('illustration');
// let ph = document.getElementById('photography');
// let ld = document.getElementById('logo-designing');

function showPE(){
    if(pe.checked){
        document.getElementById('photo-editing-1').disabled = false;
        document.getElementById('photo-editing-2').disabled = false;
        document.getElementById('photo-editing-3').disabled = false;
        document.getElementById('photo-editing-4').disabled = false;
        document.getElementById('photo-editing-5').disabled = false;
        document.getElementById('photo-editing-6').disabled = false;
    }else{
        document.getElementById('photo-editing-1').disabled = true;
        document.getElementById('photo-editing-2').disabled = true;
        document.getElementById('photo-editing-3').disabled = true;
        document.getElementById('photo-editing-4').disabled = true;
        document.getElementById('photo-editing-5').disabled = true;
        document.getElementById('photo-editing-6').disabled = true;
    }
}
function showVE(){
    if(ve.checked){
        document.getElementById('video-editing-1').disabled = false;
        document.getElementById('video-editing-2').disabled = false;
        document.getElementById('video-editing-3').disabled = false;
        document.getElementById('video-editing-4').disabled = false;
        document.getElementById('video-editing-5').disabled = false;
    }else{
        document.getElementById('video-editing-1').disabled = true;
        document.getElementById('video-editing-2').disabled = true;
        document.getElementById('video-editing-3').disabled = true;
        document.getElementById('video-editing-4').disabled = true;
        document.getElementById('video-editing-5').disabled = true;
    }
}
function showPD(){
    if(pd.checked){
        document.getElementById('print-designs-1').disabled = false;
        document.getElementById('print-designs-2').disabled = false;
        document.getElementById('print-designs-3').disabled = false;
        document.getElementById('print-designs-4').disabled = false;
        document.getElementById('print-designs-5').disabled = false;
        document.getElementById('print-designs-6').disabled = false;
        document.getElementById('print-designs-7').disabled = false;
        document.getElementById('print-designs-8').disabled = false;
    }else{
    document.getElementById('print-designs-1').disabled = true;
    document.getElementById('print-designs-2').disabled = true;
    document.getElementById('print-designs-3').disabled = true;
    document.getElementById('print-designs-4').disabled = true;
    document.getElementById('print-designs-5').disabled = true;
    document.getElementById('print-designs-6').disabled = true;
    document.getElementById('print-designs-7').disabled = true;
    document.getElementById('print-designs-8').disabled = true;
    }
}
function showGA(){
    if(ga.checked){
        document.getElementById('graphic-arts-1').disabled = false;
        document.getElementById('graphic-arts-2').disabled = false;
        document.getElementById('graphic-arts-3').disabled = false;
        document.getElementById('graphic-arts-4').disabled = false;
    }else{
        document.getElementById('graphic-arts-1').disabled = true;
        document.getElementById('graphic-arts-2').disabled = true;
        document.getElementById('graphic-arts-3').disabled = true;
        document.getElementById('graphic-arts-4').disabled = true;
    }
}
showPE();
showVE();
showPD();
showGA();