$(function () {
    // $('.navbar .menu-item>a').on('click', function () {
    //     $('.navbar .menu-item').removeClass('menu-item-selected');
    //     $(this).parent().addClass('menu-item-selected');
    // })
    highlightCurrentNavItem();

    $(window).scroll(function () {
        highlightCurrentNavItem();
    });

    changeBannerSize();
});

function changeBannerSize() {
    var window_height = $(window).height();
    $('.top-banner').css('height', window_height - 43);
}

function highlightCurrentNavItem() {
    var window_top = $(window).scrollTop() + 43;
    var speakers_introduction_top = $('#speakers-introduction').offset().top;
    var conf_introduction_top = $('#conf-introduction').offset().top;
    var partners_top = $('#partners').offset().top;
    var location_top = $('#location').offset().top;
    if (0 < window_top && window_top < speakers_introduction_top) {
        focusOn(1);
    }
    if (speakers_introduction_top < window_top && window_top < conf_introduction_top) {
        focusOn(2);
    }
    if (conf_introduction_top < window_top && window_top < partners_top) {
        focusOn(3);
    }
    if (partners_top < window_top && window_top < location_top) {
        focusOn(4);
    }
    if (location_top < window_top) {
        focusOn(5);
    }
}

function focusOn(menuItem) {
    $('.navbar .menu-item').removeClass('menu-item-selected');
    $('.navbar .menu-item:nth-child(' + menuItem + ')').addClass('menu-item-selected');
}