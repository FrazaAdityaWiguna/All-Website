$(window).on('load', function() {
    $('.product .left').addClass('appear');
    $('.product .right').addClass('appear');
});

$(window).scroll(function() {
    const wScroll = $(this).scrollTop();

    if (wScroll > $('.product').offset().top - 100) {
        $('.product .col-sm-5').each(function(i) {
            setTimeout(function() {
                $('.product .col-sm-5').eq(i).addClass('appear');
            }, 300 * (i + 1));
        });
    }

});