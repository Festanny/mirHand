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