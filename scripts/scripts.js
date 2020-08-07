$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    var imgPos = ((scrollTop / 2)) + 'px';
    $('.parallax').find('img').css('transform', 'translateY(' + imgPos + ')');
});


