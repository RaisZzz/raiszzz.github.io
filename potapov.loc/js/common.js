$(function () {


    //Chrome Smooth Scroll
    try {
        $.browserSelector();
        if ($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch (err) {

    }
    ;

    $("img, a").on("dragstart", function (event) {
        event.preventDefault();
    });

});


$(document).ready(function () {
    $('#nav-icon4').click(function () {
        $(this).toggleClass('open');
        $('.hole_header .left_part').slideToggle(400);
    });
});


$(function () {
    try {
        $("#slider-range").slider({
            range: true,
            min: 0,
            max: 500,
            values: [0, 500],
            slide: function (event, ui) {
                $("#start").val(ui.values[0] + " м. кв.");
                $("#end").val(ui.values[1] + " м. кв.");
            }
        });
        $("#start").val($("#slider-range").slider("values", 0) + " м. кв.");
        $("#end").val($("#slider-range").slider("values", 1) + " м. кв.");
    } catch (e) {

    }

});


$(function () {
    try {
        $("#slider-range2").slider({
            range: true,
            min: 0,
            max: 500,
            values: [0, 500],
            slide: function (event, ui) {
                $("#start2").val(ui.values[0] + " м. кв.");
                $("#end2").val(ui.values[1] + " м. кв.");
            }
        });
        $("#start2").val($("#slider-range2").slider("values", 0) + " м. кв.");
        $("#end2").val($("#slider-range2").slider("values", 1) + " м. кв.");
    } catch (e) {

    }
});


var x = window.matchMedia("(max-width: 1201px)");

    $(".banners").slick({
        autoplay: false,
        infinite: true,
        slidesToShow: 3,
        // variableWidth: true,
        slidesToScroll: 1,
        // prevArrow: '<div class="slider-arrow-prev"><img src="img/arrow-left-black.png" alt="" /></div>',
        // nextArrow: '<div class="slider-arrow-next"><img src="img/arrow-right-black.png" alt="" /></div>',
        responsive: [
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 641,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
var map_json = null;
$(document).ready(function () {
    $('html.js .loader').remove();
    jQuery('img.svg').each(function () {
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function (data) {
            var $svg = jQuery(data).find('svg');

            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }
            $svg = $svg.removeAttr('xmlns:a');
            $img.replaceWith($svg);
            init_svg();
        }, 'xml');

    });


});
$(document).on('click', '.btn .lines', function () {
    $(this).parents('.btn').toggleClass('show');
    $('.mobile-menu').toggleClass('menu-visible');
    $('.grey-bg').toggleClass('menu-visible');
});
$(document).on('click', '.burger', function () {
    $(this).parents('.btn').toggleClass('show');
    $('.mobile-menu').toggleClass('menu-visible');
    $('.grey-bg').toggleClass('menu-visible');
});

function init_svg() {
    if ($('#map_svg').length > 0) {
        $.getJSON("map_data.json", function (data) {
            map_json = data;
            $.each(map_json, function (key, value) {
                $('#map_svg #' + key).addClass(value.status);
                if ($('#filter_block').length > 0) {
                    var select = $('#filter_block .hidden .one_result');
                    select.attr('data-id', key);
                    $.each(value.data_popup, function (new_key, info) {
                        select.find('*[data-key="' + new_key + '"]').text(info);
                    });
                    select.clone().appendTo("#filter_block");

                }
            });
            $('#filter_block>.hidden').remove();
            if ($(window).width() < 992) {
                $('.map_block').css('min-height', $('#map_svg').height() + 'px');
            }
        });
    }
}

$(document).on('click', '#map_svg .st0', function () {
    var id = $(this).attr('id');
    init_show(id);


});
$(document).on('click', '.map_block .popup_block .close', function () {
    $('#map_svg .st0').removeClass('active');
    $('.map_block').removeClass('active');
    $('#filter_block *[data-id]').removeClass('current');
    $('.map_block .arrow').removeClass('arrow_1');
    $('.map_block .arrow').removeClass('arrow_2');
    $('.map_block .arrow').removeClass('arrow_3');
    $('.map_block .arrow').removeClass('arrow_4');


});

function init_show(id) {
    var data = map_json[id];
    if (data !== undefined) {
        $('.map_block .arrow').removeClass('arrow_1');
        $('.map_block .arrow').removeClass('arrow_2');
        $('.map_block .arrow').removeClass('arrow_3');
        $('.map_block .arrow').removeClass('arrow_4');
        $('.map_block .cont .top .status').addClass('hidden');
        $('.map_block .cont .top .status.' + data.status).removeClass('hidden');
        $('.map_block .cont .top .name').text(data.data_popup.name);
        $('.map_block .cont .address p').text(data.data_popup.address);
        $('.map_block .cont .square p').text(data.data_popup.square);
        $('#filter_block *[data-id]').removeClass('current');
        if ($('#' + id).hasClass('active')) {
            $('#map_svg .st0').removeClass('active');
            $('#' + id).parents('.map_block').removeClass('active');
        } else {
            $('#map_svg .st0').removeClass('active');
            $('#' + id).addClass('active');
            $('#' + id).parents('.map_block').addClass('active');
            $('#filter_block *[data-id="' + id + '"]').addClass('current');
        }
        if ($(window).width() > 768) {
            if ($('.map_block #map_svg .st0.active').length > 0) {
                setTimeout(function () {
                    var position = $('.map_block #map_svg .st0.active').position();
                    var position_size = {
                        "width": $('.map_block #map_svg .st0.active')[0].getBoundingClientRect().width,
                        "height": $('.map_block #map_svg .st0.active')[0].getBoundingClientRect().height
                    };
                    var offse_parent = $('.map_block').offset();
                    position.top = position.top - offse_parent.top - position_size.height / 2;
                    position.left = position.left - offse_parent.left - position_size.width / 2;
                    if (position !== undefined) {
                        var svg = {
                            "width": $('.map_block').width(),
                            "height": $('.map_block').height()
                        };
                        var block = {
                            "width": $('.map_block.active .popup_block').width(),
                            "height": $('.map_block.active .popup_block').height()
                        };
                        var post_key = 0;
                        if (position.top > svg.height / 2) {
                            if (position.left > svg.width / 2) {
                                post_key = 3
                            } else {
                                post_key = 4
                            }
                        } else {
                            if (position.left > svg.width / 2) {
                                post_key = 2;
                            } else {
                                post_key = 1;
                            }

                        }
                    }
                    var arrow = $('.map_block .arrow');
                    arrow.addClass('arrow_' + post_key);

                    var position_block = {
                        "top": position.top,
                        "left": position.left + position_size.width + 30,

                    };
                    switch (post_key) {
                        case 1:
                        case 4:
                            arrow.css({
                                'top': position.top + (position_size.height / 2) + 10 + 'px',
                                'left': position.left + position_size.width + 'px',

                            });

                            position_block = {
                                "top": position.top,
                                "left": position.left + position_size.width + 30,

                            };
                            if ((position_block.top + block.height + 50) > svg.height) {
                                position_block.top = svg.height - 50 - block.height;
                            }


                            $('.map_block.active .popup_block').css({
                                'top': position_block.top + 'px',
                                'left': position_block.left + 'px'

                            });
                            break;
                        case 3:
                        case 2:
                            arrow.css({
                                'top': position.top + (position_size.height / 2) + 10 + 'px',
                                'left': position.left + 30 + 'px',

                            });
                            position_block = {
                                "top": position.top,
                                "left": position.left - block.width - 10,

                            };
                            if ((position_block.top + block.height + 50) > svg.height) {
                                position_block.top = svg.height - 50 - block.height;
                            }

                            $('.map_block.active .popup_block').css({
                                'top': position_block.top + 'px',
                                'left': position_block.left + 'px'

                            });
                            break
                    }
                }, 10);
            }
        }
    }
}

$(document).on('click', '#filter_block *[data-id]', function () {
    var id = $(this).attr('data-id');
    init_show(id);
});