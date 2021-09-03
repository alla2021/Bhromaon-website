$(document).ready(function () {
    $('.js-button-nav').on('click', function () {
        if ($('.js-body').hasClass('active')) {
            $('.js-body').removeClass('active');
        } else {
            $('.js-body').addClass('active');
        }
    })
});