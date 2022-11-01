$('.marquee').marquee({
	speed: 10
});

var sourcesSelector = document.body.querySelectorAll('select'),
    sourcesTotal = sourcesSelector.length;

for (var i = 0; i < sourcesTotal; i++) {
    if (mejs.Features.isiOS) {
        if (sourcesSelector[i].querySelector('option[value^="rtmp"]')) {
            sourcesSelector[i].querySelector('option[value^="rtmp"]').disabled = true;
        }
        if (sourcesSelector[i].querySelector('option[value$="webm"]')) {
            sourcesSelector[i].querySelector('option[value$="webm"]').disabled = true;
        }
        if (sourcesSelector[i].querySelector('option[value$=".mpd"]')) {
            sourcesSelector[i].querySelector('option[value$=".mpd"]').disabled = true;
        }
        if (sourcesSelector[i].querySelector('option[value$=".ogg"]')) {
            sourcesSelector[i].querySelector('option[value$=".ogg"]').disabled = true;
        }
        if (sourcesSelector[i].querySelector('option[value$=".flv"]')) {
            sourcesSelector[i].querySelector('option[value*=".flv"]').disabled = true;
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var mediaElements = document.querySelectorAll('video, audio'), total = mediaElements.length;

    for (var i = 0; i < total; i++) {
        new MediaElementPlayer(mediaElements[i], {
            pluginPath: 'https://cdn.jsdelivr.net/npm/mediaelement@4.2.16/build/',
            shimScriptAccess: 'always',
            success: function () {
                var target = document.body.querySelectorAll('.player'), targetTotal = target.length;
                for (var j = 0; j < targetTotal; j++) {
                    target[j].style.visibility = 'visible';
                }
            }
        });
    }
});

$('.mejs__fullscreen-button>button').on('click', function() {
    $('html, body').animate({scrollTop: $('#formOrder').offset().top - fixed_offset}, 1000);
})

window.onload = function() { // можно также использовать window.addEventListener('load', (event) => {
    $('.mejs__controls').addClass('opTrue');
};
$('#player').on('click', function() {
    if ($('.mejs__controls').hasClass('opTrue')) {
        $('.mejs__controls').removeClass('opTrue')
    }
})

var swiper = new Swiper(".brandSlider", {
    slidesPerView: 3,
    loop: true,
    navigation: {
        nextEl: ".btn-slide-next",
        prevEl: ".btn-slide-prev",
    }
});

var widthLine = (($('footer').width() - $('.container').width()) / 2) + 86;
$('footer .footer .item .contactInfo.beforeContactInfo').css('width', widthLine + 'px')
$(window).resize(function() {
    widthLine = (($('footer').width() - $('.container').width()) / 2) + 86;
    $('footer .footer .item .contactInfo.beforeContactInfo').css('width', widthLine + 'px')
});

$('header nav').hover(
    function() {
      $( 'header nav' ).css('background-color', '#ffffff');
    }, function() {
        $( 'header nav' ).css('background-color', 'transparent');
    }
);

(function($) {
    $(window).scroll(function () {
        if ($(window).scrollTop() >= $('header .headerTop').offset().top + $('header .headerTop').height()) {
            $('header nav').addClass('fixed_nav');
        }
        else {
            $('header nav').removeClass('fixed_nav');
        }
    })

    $(window).resize(function() {
        styleInfoCompany()
        styleCooperationText()
    });
    styleInfoCompany()
    styleCooperationText()

    $(window).on("scroll resize", function() {
        var o = $(window).scrollTop() / ($(document).height() - $(window).height());
        $(".progress-bar").css({
            "width": (100 * o | 0) + "%"
        });
        $('progress')[0].value = o;
    })
})(jQuery);

function styleInfoCompany() {
    $('.infoCompanySection .infoCompanyBlock .photo-text').css({
        'margin-right': ($('body').width() - $('.container').width()) / 2,
        'grid-template-columns': `${(($('body').width() - $('.container').width()) / 2) + $('.container').width() / 2}px auto`
    })
}
function styleCooperationText() {
    $('.cooperation .cooperationBlock .info-block .item .textBlock').width($('body').width() / 2 + $('.container').width() * 25 / 100)
    $('.cooperation .cooperationBlock .info-block .item .textBlock .h3.title__page').css({
        'margin-left': ($('body').width() - $('.container').width()) / 2 - 10
    })
    $('.cooperation .cooperationBlock .info-block .item .textBlock .triangle').css('border-top-width', $('.cooperation .cooperationBlock .info-block .item .textBlock').height())
}
