/*global $, jQuery, console, alert, prompt */
$(document).ready(function () {
    "use strict";
    $('.aside-dropdown > a.aside-nav-link').on('click', function (e) {
        e.preventDefault();
        if ($(this).hasClass('showen')) {
            $(this).removeClass('showen');
            $(this).parent().find('.drop-menu').slideUp('slow');
        } else {
            $(this).parent().find('.drop-menu').slideDown('slow');
            $(this).addClass('showen');
        }
        
    });

    $('body, html').on('click', function (e) {
        $('.drop-menu').slideUp('fast');
        $('.aside-dropdown > a.aside-nav-link').removeClass('showen');
    });

    $('.drop-menu, .aside-dropdown > a.aside-nav-link').on('click', function (e) {
        // e.preventDefault();
        e.stopPropagation();
    });

    const ps = new PerfectScrollbar('#main-menu', {
        wheelSpeed: 2,
        wheelPropagation: true,
        minScrollbarLength: 20
    });

    const pss = new PerfectScrollbar('#aside-content', {
        wheelSpeed: 2,
        wheelPropagation: true,
        minScrollbarLength: 20
    });

    if ($('select')) {
        $('select').niceSelect();
    }

    if ($('.datepicker')) {
        $('.datepicker').datepicker({
            orientation: 'bottom',
        });
    }

    // if ($('.time-from')) {
    //     $('.time-from').datepicker({
    //         type: 'time',
    //         orientation: 'bottom',
    //     });
    // }

    if ($('#circleProgress')) {
        $('#circleProgress').circleProgress({
            value: 0.23,
            size: 150,
            fill: "#FFCA00"
        });
    }

    $('.back-btn button').on('click', function () {
        if($('.aside-right').hasClass('close')) {
            $('.aside-right').removeClass('close');
            $('.content-page').removeClass('no-right-side');
        } else {
            $('.aside-right').addClass('close');
            $('.content-page').addClass('no-right-side');
        }

    });

    $('.open-left-menu').on('click', function () {
        $('.aside-left').removeClass('close');
        $('.left-overlay').fadeIn('fast');
        $('.left-overlay').on('click', function () { 
            $('.left-overlay').fadeOut('fast');
            $('.aside-left').addClass('close');
        });
    });

    $(window).resize(function () {
        menus();
    });
    menus();

    // //Time Picker
    // if($('#datetimepicker1').length > 0)
    // $('#datetimepicker1').datepicker({
    //     format : 'DD/MM/YYYY hh:mm A',
    //     orientation: 'bottom',
    //     viewSelect: 'time'
    // });

    // //Time Picker
    // if($('#datetimepicker2').length > 0)
    // $('#datetimepicker1').datetimepicker({
    //     language: 'en',
    //     pick12HourFormat: true
    // });

    if($('.time-input').length > 0) {
        $('.time-input').timepicker({ 'scrollDefault': 'now' });
    }

    if($('#timepicker1').length > 0) {
        $('#timepicker1').timepicker({ 'scrollDefault': 'now' });
    }

    if($('#timepicker2').length > 0) {
        $('#timepicker2').timepicker({ 'scrollDefault': 'now' });
    }

    $('.verify-input').on('input', function () {
        if($(this).val().length) {
            console.log('hs')
            $(this).addClass('has-val')
        } else {
            $(this).removeClass('has-val')
        }
    });
    // verifyInput();
    //
    // console.log($('.verify-input').val().length)
    var int = $(".verify-input").filter(function (id, item) {
        console.log(item);
        // item.classList
        if(item.value.length) {
            item.classList.add('has-val')
        } else {
            item.classList.remove('has-val')
        }
    });

    console.log(int)

});

function verifyInput() {
    if($('.verify-input').val().length) {
        console.log('hs')
        $(this).addClass('has-val')
    } else {
        $(this).removeClass('has-val')
    }
}

function menus() {
    if($(window).width() <= 991) {
        $('.aside-left').addClass('close');
        $('.content-page').removeClass('no-right-side');
    } else {
        $('.aside-left').removeClass('close');
        $('.left-overlay').fadeOut('fast');
        $('.content-page').addClass('no-right-side');
    }

    if($(window).width() <= 1024) {
        $('.content-page').removeClass('no-right-side');
    } else {
        $('.left-overlay').fadeOut('fast');
        $('.content-page').addClass('no-right-side');
    }
}

// upload file

function readURL(input) {
    if (input.files && input.files[0]) {

        var reader = new FileReader();

        reader.onload = function (e) {
            $('.image-upload-wrap').hide();

            $('.file-upload-image').attr('src', e.target.result);
            $('.file-upload-content').show();

            $('.image-title').html(input.files[0].name);
        };

        reader.readAsDataURL(input.files[0]);

    } else {
        removeUpload();
    }
}

function removeUpload() {
    $('.file-upload-input').replaceWith($('.file-upload-input').clone());
    $('.file-upload-content').hide();
    $('.image-upload-wrap').show();
}
$('.image-upload-wrap').bind('dragover', function () {
    $('.image-upload-wrap').addClass('image-dropping');
});
$('.image-upload-wrap').bind('dragleave', function () {
    $('.image-upload-wrap').removeClass('image-dropping');
});