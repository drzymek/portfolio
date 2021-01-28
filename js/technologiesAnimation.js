$(document).on('scroll', function () {
    const windowHeight = $(window).height();
    const scrollValue = $(this).scrollTop();
    const $technologies = $('#technologies');
    const technologiesFromTop = $technologies.offset().top;
    const technologiesHeight = $technologies.outerHeight();

    if (scrollValue > technologiesFromTop + technologiesHeight - windowHeight - 500) {
        $technologies.addClass('active');
    }

    if (scrollValue < technologiesFromTop - technologiesHeight || scrollValue > technologiesFromTop + technologiesHeight) {
        $technologies.removeClass('active');
    }
})