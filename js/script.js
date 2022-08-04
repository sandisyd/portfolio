//event pada saat link di klik

$('.page-scroll').on('click', function () {
    var href = $(this).attr('href');
    var elementHref = $(href);

    $('html,body').animate({
        scrollTop: elementHref.offset().top - 50
    }, 1000, 'swing');

});


//paralax

//about
$(window).on('load', function(){
    $('.kiri').addClass('pMuncul');
    $('.kanan').addClass('pMuncul');
})
$(window).scroll(function () {
    var wScroll = $(this).scrollTop();

    $('.jumbotron img').css({
        'transform': 'translate(0px, ' + wScroll / 4 + '%)'
    });
    $('.jumbotron h1').css({
        'transform': 'translate(0px, ' + wScroll / 3 + '%)'
    });
    $('.jumbotron p').css({
        'transform': 'translate(0px, ' + wScroll / 1.5 + '%)'
    });

    //Portfolio
    if (wScroll > $('.portfolio').offset().top - 250) {
        $('.portfolio .thumbnail').each(function (i) {
            setTimeout(
                function () {

                    $('.portfolio .thumbnail').eq(i).addClass('muncul');
                }, 300 * (i + 1)
            );
        });
    }
});
