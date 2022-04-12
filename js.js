$('.works__btn').click(function() {
    $('.works__item').css('filter','blur(5px)');
    $('.works__overlay').fadeIn();
})

$('.works__close-popup').click(function() {
    $('.works__overlay').fadeOut();
    $('.works__item').css('filter','none');
})

$(document).mouseup(function (e) {
    var popup = $('.works__popup');
    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
        $('.works__overlay').fadeOut();
        $('.works__item').css('filter','none');
    }
})