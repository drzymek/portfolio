const $nav = $('.nav');
const $about = $('#about');
const $navMobile = $('nav.mobile');
const $navArrow = $('div.arrow');

$(document).on('scroll', function () {
    const windowHeight = $(window).height();
    // const $nav = $('.nav');
    const scrollValue = $(this).scrollTop();
    // const $about = $('#about');
    const aboutFromTop = $about.offset().top;
    const aboutHeight = $about.height();
    // const $navMobile = $('nav.mobile');
    // const $navArrow = $('div.arrow');

    if (scrollValue > (aboutFromTop + aboutHeight / 2) - windowHeight) {
        $nav.addClass('active');
        $navMobile.addClass('active');
    }

    if (scrollValue < aboutHeight / 2) {
        $nav.removeClass('active');
        $navMobile.removeClass('active');
    }
})

$($navArrow).on('click', function () {
    $navMobile.toggleClass('on');
    $navArrow.toggleClass('on');
})

