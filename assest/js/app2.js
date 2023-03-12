let menu = $('.navbar_menu');
let menuBox = $('.header-menu .menu-items');
let menuItem = $('.menu-item');
let btn = $('.header-button');
$(document).ready(function () {
    let width = $(window).width();
    $(window).resize(function () {
        width = $(window).width();
        if (width >= 795) {
            menuBox.removeClass('display-inlineblock');
            btn.removeClass('display-inlineblock');
        }
    });
    menu.click(() => {
        menuBox.toggleClass('display-inlineblock');
        btn.toggleClass('display-inlineblock');
    });

    menuItem.click(() => {
        menuBox.removeClass('display-inlineblock');
        btn.removeClass('display-inlineblock');
    });
});