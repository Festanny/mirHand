$('.marquee').marquee({
	speed: 10
});

let sourcesSelector = document.body.querySelectorAll('select'),
    sourcesTotal = sourcesSelector.length;

for (let i = 0; i < sourcesTotal; i++) {
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
    let mediaElements = document.querySelectorAll('video, audio'), total = mediaElements.length;

    for (let i = 0; i < total; i++) {
        new MediaElementPlayer(mediaElements[i], {
            pluginPath: 'https://cdn.jsdelivr.net/npm/mediaelement@4.2.16/build/',
            shimScriptAccess: 'always',
            success: function () {
                let target = document.body.querySelectorAll('.player'), targetTotal = target.length;
                for (let j = 0; j < targetTotal; j++) {
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

let swiper = new Swiper(".brandSlider", {
    slidesPerView: 3,
    loop: true,
    navigation: {
        nextEl: ".btn-slide-next",
        prevEl: ".btn-slide-prev",
    }
});
let swiper2 = new Swiper(".brandSliderPage", {
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});
let swiper3 = new Swiper(".discountSlider", {
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".btn-slide-next-dsc",
        prevEl: ".btn-slide-prev-dsc",
    }
});

let widthLine = (($('footer').width() - $('.container').width()) / 2) + 86;
$('footer .footer .item .contactInfo.beforeContactInfo .line').css('width', widthLine + 'px')
$(window).resize(function() {
    widthLine = (($('footer').width() - $('.container').width()) / 2) + 86;
    $('footer .footer .item .contactInfo.beforeContactInfo .line').css('width', widthLine + 'px')
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
        styleNewsText()
        styleTextAbout()
        styleLineTitleText50()
    });
    styleInfoCompany()
    styleCooperationText()
    styleNewsText()
    styleTextAbout()
    styleLineTitleText50()

    $(window).on("scroll resize", function() {
        let o = $(window).scrollTop() / ($(document).height() - $(window).height());
        $(".progress-bar").css({
            "width": (100 * o | 0) + "%"
        });
        $('progress')[0].value = o;
    })
})(jQuery);

function styleInfoCompany() {
    $('.articles .articlesBlock .info-block .photo-text:nth-child(2n - 1) .textBlockMain .textBlock').css({
        'margin-right': ($('body').width() - $('.container').width()) / 2 - 10
    })
    $('.articles .articlesBlock .info-block .photo-text:nth-child(2n) .textBlockMain .textBlock').css({
        'margin-left': ($('body').width() - $('.container').width()) / 2 - 10
    })
}
function styleCooperationText() {
    $('.cooperation .cooperationBlock .info-block .item .textBlock').width($('body').width() / 2 + $('.container').width() * 25 / 100)
    $('.cooperation .cooperationBlock .info-block .item .textBlock .h3.title__page').css({
        'margin-left': ($('body').width() - $('.container').width()) / 2 - 10
    })
    let lengthTriagle = $('.cooperation .cooperationBlock .info-block .item .textBlock .triangle');
    for (let i=0; i<lengthTriagle.length; i++) {
        $(`.cooperation .cooperationBlock .info-block .item:nth-child(${i+1}) .textBlock .triangle`).css('border-top-width', $(`.cooperation .cooperationBlock .info-block .item:nth-child(${i+1}) .textBlock`).height())
    }
}
function styleNewsText() {
    $('.lineTitleSection .info-block .item .textBlock .h3.title__page').css({
        'margin-left': ($('body').width() - $('.container').width()) / 2 - 10
    })
    $('.lineTitleSection .info-block .item .textAndBtn').css({
        'margin-left': ($('body').width() - $('.container').width()) / 2 - 10
    })
    $('.brandSection .brandSectionBlock .search').css({
        'margin-left': ($('body').width() - $('.container').width()) / 2 - 10
    })
    $('.banner.job .bannerBlock .block').css({
        'margin-left': ($('body').width() - $('.container').width()) / 2 - 10
    })
    $('.banner.job .bannerBlock .h3.title__page').css({
        'margin-left': ($('body').width() - $('.container').width()) / 2 - 10
    })
    $('.stocksBlock .stocksBlockMain .info-block .item .textBlock .h3.title__page').css({
        'margin-left': ($('body').width() - $('.container').width()) / 2 - 10
    })
    $('.stocksBlock .stocksBlockMain .info-block .item .textBlock').css({
        'width': $('body').width() - (($('body').width() - $('.container').width()) / 1.1)
    })
    $('.banner.job .bannerBlock').css({
        'width': $('body').width() - (($('body').width() - $('.container').width()) / 1.1)
    })
    $('.infoContactsSection .infoContactsSectionBlock .photo-text .textBlockMain').css({
        'margin-right': ($('body').width() - $('.container').width()) / 2 - 10,
    })
    let lengthTriagle = $('.lineTitleSection .info-block .item .textBlock .triangle');
    for (let i=0; i<lengthTriagle.length; i++) {
        $(`.lineTitleSection .info-block .item:nth-child(${i+1}) .textBlock .triangle`).css('border-top-width', $(`.lineTitleSection .info-block .item:nth-child(${i+1}) .textBlock`).height())
    }
    let lengthTriagle2 = $('.job .lineTitleSection .item .textBlock .triangle');
    for (let i=0; i<lengthTriagle2.length; i++) {
        $(`.job .lineTitleSection .item:nth-child(${i+1}) .textBlock .triangle`).css('border-top-width', $(`.job .lineTitleSection .item:nth-child(${i+1}) .textBlock`).height())
    }
}
function styleLineTitleText50() {
    $('.lineTitleSection50 .info-block .item .textBlock .h3.title__page').css({
        'margin-left': ($('body').width() - $('.container').width()) / 2 - 10
    })
    let lengthTriagle = $('.lineTitleSection50 .info-block .item .textBlock .triangle');
    for (let i=0; i<lengthTriagle.length; i++) {
        $(`.lineTitleSection50 .info-block .item:nth-child(${i+1}) .textBlock .triangle`).css('border-top-width', $(`.lineTitleSection50 .info-block .item:nth-child(${i+1}) .textBlock`).height())
    }
}
function styleTextAbout() {
    $('.infoCompanySection .infoCompanyBlock .photo-text .textBlockMain').css({
        'margin-right': ($('body').width() - $('.container').width()) / 2
    })
    $('.brandSectionPage .brandSectionBlockPage .info-block .item.desc').css({
        'margin-right': ($('body').width() - $('.container').width()) / 2
    })
    $('.brandSectionPage .brandSectionBlockPage .info-block').css({
        'grid-template-columns': `${($('body').width() / 2)-78}px ${$('body').width() / 2}px`
    })
}

$('.newsSection .newsSectionBlock .info-block .item .titleTextBlockNews .textAndBtn .arrows-block').on('click', function() {
    let blockNews = $(this)
    blockNews.prev().toggleClass('close open')
    blockNews.prev().height(blockNews.prev().children()) + 'px'
    if (blockNews.prev().hasClass('open')) {
        blockNews.prev().height(blockNews.prev().children()) + 'px'
        blockNews.prev().css({'min-height': $('.newsSection .newsSectionBlock .textMainCooperation.close').height()}).animate({'max-height': blockNews.prev().children().height() + 'px'}, 100)
        blockNews.prev().children().children('.beforeWhite').fadeOut(500)
    } else {
        blockNews.prev().css({
            'max-height': ''
        })
        blockNews.prev().children().children('.beforeWhite').fadeIn(100)
    }
    if (blockNews.hasClass('close')) {
        blockNews.children('span').text('Нажмите чтобы скрыть')
        blockNews.children('.arrows').addClass('close')
    } else {
        blockNews.children('span').text('Нажмите чтобы увидеть')
        blockNews.children('.arrows').removeClass('close')
    }
    blockNews.toggleClass('close open')
})

// Получение значения рейтинга по клику
$(".newReview input[type='radio']").on('click', function (el) {
    let id = $(el.target).parent().attr('data-review')
    console.log(id)
    let value = $(`.reviewsSection .item[data-review='${id}'] .newReview .rating input[type="radio"]:checked`).val();
    let labels = $(`.reviewsSection .item[data-review='${id}'] .newReview .rating .rating-label`);

    for (let i=0; i<labels.length; i++) {
        labels.eq(i).removeClass("select");
    }
    for (let i = 0; i < value; i++) {
        labels.eq(i).addClass("select");
    }
});

for (let s=0; s<$('.reviewsSection .reviewsSectionBlock .info-block .item').length; s++) {
    for (let j=0; j<$(`.reviewsSection .reviewsSectionBlock .info-block .item:nth-child(${s+1}) .rating`).length; j++) {
        for (let i=0; i < $(`.reviewsSection .item:nth-child(${s+1}) .block .review-block:nth-child(${j+1}) .rating input[type="radio"]:checked`).val(); i++) {
            $(`.reviewsSection .item:nth-child(${s+1}) .review-block:nth-child(${j+1}) .rating .rating-label`).eq(i).addClass("select");
        }
    }
}

$('.reviewsSection .info-block .item .btn-review').on('click', function(el) {
    el = el.currentTarget
    let elAttr = $(el).attr('data-review')
    $(el).addClass('d-none')
    $(`.reviewsSection .info-block .item[data-review='${elAttr}'] form.newReview`).removeClass('d-none')
})

$('.reviewsSection form.newReview input[type="file"]').change(function(el) {
    $(el.target).prev().prev().children().removeClass().addClass('fa-solid fa-check success')
    $(el.target).parent().addClass('success')
    console.log($(el.target).parent())
});

$('.brandSection .brandSectionBlock .search input').on('input', function() {
    let temp = $(this).val()
    if (temp) {
        $('.brandSection .brandSectionBlock .info-block .item').each(function () {
            if ($(this).attr('data-search').toLowerCase().indexOf(temp.toLowerCase()) > -1) {
                $(this).removeClass('d-none')
            } else {
                $(this).addClass('d-none')
            }
        })
    } else {
        $('.brandSection .brandSectionBlock .info-block .item').each(function () {
            $(this).removeClass('d-none')
        })
    }
})
$('.jobList .jobListBlock .info-block .item .textInformation .jobBlockMain .jobBlockMainTitle .nameJob').on('click', function(el) {
    if ($(el.target).parent().parent().hasClass('open')) {
        $(el.target).parent().parent().removeClass('open')
        $(el.target).parent().parent().children().children().next().eq(0).removeClass('close')
    } else {
        $('.jobList .jobListBlock .info-block .item .textInformation .jobBlockMain.open').removeClass('open')
        $('.jobList .jobListBlock .info-block .item .textInformation .jobBlockMainTitle .arrows.close').removeClass('close')
        $(el.target).parent().parent().addClass('open')
        $(el.target).parent().parent().children().children().next().eq(0).addClass('close')
    }
})
$('.jobList .jobListBlock .info-block .item .namePlace > .arrows-block').on('click', function(el) {
    $('.jobList .jobListBlock .info-block .item').children('.textInformation').children('.jobBlockMain').removeClass('open')
    $('.jobList .jobListBlock .info-block .item').children('.textInformation').children('.jobBlockMain').children('.jobBlockMainTitle').children('.arrows').removeClass('close')
    $('.jobList .jobListBlock .info-block .item').children('.namePlace').children('.arrows-block').children('.arrows').removeClass('close')
    if ($(this).parent().next().hasClass('open')) {
        $(this).parent().next().removeClass('open')
        $(this).parent().parent().children('.imgPlace').removeClass('d-none')
        $(this).parent().children('.arrows-block').children('span').text('Нажмите чтобы увидеть')
    } else {
        $('.jobList .jobListBlock .info-block .item').children().next().removeClass('open')
        $('.jobList .jobListBlock .info-block .item').children('.imgPlace').removeClass('d-none')
        $('.jobList .jobListBlock .info-block .item').children('.namePlace').children('.arrows-block').children('span').text('Нажмите чтобы увидеть')
        $(this).parent().children('.arrows-block').children('span').text('Нажмите чтобы скрыть')
        $(this).parent().children('.arrows-block').children('.arrows').addClass('close')
        $(this).parent().next().addClass('open')
        $(this).parent().parent().children('.imgPlace').addClass('d-none')
    }
})
$('.jobList .jobListBlock .__select__label').on('click', function(el) {
    let id = $(this).attr('data-city'),
        content = $(`.jobList .jobListBlock .info-block .item .textInformation.cityInfo[data-city='${id}']`)

    $(`.jobList .jobListBlock .info-block .item .textInformation.cityInfo.open`).removeClass('open')
    content.addClass('open')
})

if ($('.__select').length != 0) {
    const selectSingle = document.querySelector('.__select');
    const selectSingle_title = selectSingle.querySelector('.__select__title');
    const selectSingle_labels = selectSingle.querySelectorAll('.__select__label');

    // Toggle menu
    selectSingle_title.addEventListener('click', () => {
    if ('active' === selectSingle.getAttribute('data-state')) {
        selectSingle.setAttribute('data-state', '');
    } else {
        selectSingle.setAttribute('data-state', 'active');
    }
    });

    // Close when click to option
    for (let i = 0; i < selectSingle_labels.length; i++) {
    selectSingle_labels[i].addEventListener('click', (evt) => {
        selectSingle_title.textContent = evt.target.textContent;
        selectSingle.setAttribute('data-state', '');
    });
    }
}

$('.faqSection .faqSectionBlock .categoryFaq span').on('click', function() {
    let id = $(this).attr('data-faq'),
        content = $(`.faqSection .faqSectionBlock .info-block[data-faq='${id}']`)
    $('.faqSection .faqSectionBlock .categoryFaq span.active').removeClass('active')
    $(`.faqSection .faqSectionBlock .info-block.active`).removeClass('active')
    $(this).addClass('active')
    content.addClass('active')
})

$('.faqSection .faqSectionBlock .info-block .item .question').on('click', function() {
    if ($(this).hasClass('active')) {
        $(this).removeClass('active')
        $(this).next('.answer').fadeOut().removeClass('active')
    } else {
        $('.faqSection .faqSectionBlock .info-block .item .question.active').removeClass('active')
    $('.faqSection .faqSectionBlock .info-block .item .answer.active').removeClass('active')
        $(this).addClass('active')
        $(this).next('.answer').fadeIn().addClass('active')
    }
})