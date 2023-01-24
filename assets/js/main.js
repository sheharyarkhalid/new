//========= NAVBAR JS STARTS=========|
$(function() {

    // dislay or hide the menu if the user resize the window
    $(window).resize(function() {
        var wi = $(window).width();
        if (wi >= 641) {
            $('#topbar-menu').css({
                'display': 'block'
            });
            $('#topbar-menu-icon').removeClass('ion-close-round');
            $('#topbar-menu-icon').addClass('ion-navicon-round');
        } else {
            $('#topbar-menu').css({
                'display': 'none'
            });
            $('#topbar-menu-icon').removeClass('ion-close-round');
            $('#topbar-menu-icon').addClass('ion-navicon-round');
        }
    });

    // Change the menu icon, and show or hide the menu
    $('#topbar-menu-icon').click(function() {
        if ($('#topbar-menu').css('display') == 'none') {

            $('#topbar-menu').css({
                'display': 'block'
            });
            $('#topbar-menu-icon .fa-bars').hide();
            $('#topbar-menu-icon .fa-times').show();

            // $('#topbar-menu-icon').removeClass('ion-navicon-round');
            // $('#topbar-menu-icon').addClass('ion-close-round');
        } else {
            $('#topbar-menu').css({
                'display': 'none'
            });
            $('#topbar-menu-icon .fa-bars').show();
            $('#topbar-menu-icon .fa-times').hide();
            // $('#topbar-menu-icon').removeClass('ion-close-round');
            // $('#topbar-menu-icon').addClass('ion-navicon-round');
        }
    });
});


$(document).ready(function() {
    var scrollTop = 0;
    $(window).scroll(function() {
        scrollTop = $(window).scrollTop();
        $('.counter').html(scrollTop);

        if (scrollTop >= 100) {
            $('#global-nav').addClass('scrolled-nav');
        } else if (scrollTop < 100) {
            $('#global-nav').removeClass('scrolled-nav');
        }

    });

});

$(document).ready(function() {
    $("header ul li a").click(function() {
        $("header ul li a").removeClass("active");
        $(this).addClass("active");
    });
});


//========= NAVBAR JS ENDS=========|