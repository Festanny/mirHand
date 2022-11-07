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

let widthLine = (($('footer').width() - $('.container').width()) / 2) + 200;
$('footer .footer .item .contactInfo.beforeContactInfo .line').css('width', widthLine + 'px')
$(window).resize(function() {
    widthLine = (($('footer').width() - $('.container').width()) / 2) + 200;
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
        heightBlock()
    });
    styleInfoCompany()
    styleCooperationText()
    styleNewsText()
    styleTextAbout()
    styleLineTitleText50()
    heightBlock()

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
        'margin-right': ($('body').width() - $('.container').width()) / 2 - 10
    })
    $('.ourCollections .ourCollectionsBlock .textBlockMain').css({
        'margin-right': ($('body').width() - $('.container').width()) / 2 - 10
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
        blockNews.prev().css({'max-height': $('.newsSection .newsSectionBlock .textMainCooperation.close').height()}).animate({'max-height': blockNews.prev().children().height() + 'px'}, 100)
        blockNews.prev().children().children('.beforeWhite').fadeOut(500)
    } else {
        blockNews.prev().css({
            'max-height': ''
        })
        for (let i=0; i < $('.newsSection .newsSectionBlock .info-block .item').length; i++) {
            setTimeout(blockImgHeight, 1)
            function blockImgHeight() {
                let blockImgHeight = $('.newsSection .newsSectionBlock .info-block .item').eq(i).children('.imgNews').height()
                $('.newsSection .newsSectionBlock .info-block .item').eq(i).children('.imgNews').css('max-height', blockImgHeight + 'px')
                blockImgHeight = blockImgHeight - $('.lineTitleSection .info-block .item').eq(i).children('.titleTextBlockNews').children('.textBlock').height() - $('.newsSection .newsSectionBlock .info-block .item .titleTextBlockNews .textAndBtn .arrows-block').height() - 50
                $('.newsSection .newsSectionBlock .info-block .item').eq(i).children('.titleTextBlockNews').children('.textAndBtn').children('.textMainCooperation').css('max-height', blockImgHeight + 'px')
            }
        }
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
    $('.jobList .jobListBlock .info-block .item .textInformation.cityInfo.open').removeClass('open')
    if ($(this).parent().next().hasClass('open')) {
        $(this).parent().next().removeClass('open')
        $(this).parent().parent().children('.imgPlace').removeClass('d-none')
        $(this).parent().children('.arrows-block').children('span').text('Нажмите чтобы увидеть')
    } else {
        $('.jobList .jobListBlock .info-block .item').children().next().removeClass('open')
        $('.jobList .jobListBlock .info-block .item').children('.imgPlace').removeClass('d-none')
        $('.jobList .jobListBlock .info-block .item').children('.namePlace').children('.arrows-block').children('span').text('Нажмите чтобы увидеть')
        $('.__select .__select__title input').val('')
        $('.__select .__select__input:checked').prop('checked', false)
        $(this).parent().children('.arrows-block').children('span').text('Нажмите чтобы скрыть')
        $(this).parent().children('.arrows-block').children('.arrows').addClass('close')
        $(this).parent().next().addClass('open')
        $(this).parent().parent().children('.imgPlace').addClass('d-none')
    }
})
$('.jobList .jobListBlock .__select__label').on('click', function(el) {
    let id = $(this).attr('data-city'),
        content = $(`.jobList .jobListBlock .info-block .item .textInformation.cityInfo[data-city='${id}']`)

    $('.jobList .jobListBlock .info-block .item .textInformation .jobBlockMain.open').removeClass('open')
    $('.jobList .jobListBlock .info-block .item .textInformation .jobBlockMainTitle .arrows.close').removeClass('close')
    $(`.jobList .jobListBlock .info-block .item .textInformation.cityInfo.open`).removeClass('open')
    content.addClass('open')
})

if ($('.__select').length != 0) {
    // Toggle menu
    $('.__select__title').on('click', function(el) {
        if ($(this).parent().attr('data-state') == 'active') {
            $(this).children('input').prop('disabled', true)
        } else {
            $(this).children('input').prop('disabled', false)
            $(this).children('input').focus()
        }
        if ($(el.target).parent().parent().attr('data-state') == 'active' ) {
            $(el.target).parent().parent().attr('data-state', '');
        } else {
            $(el.target).parent().parent().attr('data-state', 'active');

            $(document).mouseup( function(e){
                var div = $( ".__select" );
                if ( !div.is(e.target)
                    && div.has(e.target).length === 0 ) {
                    $(el.target).parent().parent().attr('data-state', '');
                }
            });
        }
        // Close when click to option
        for (let i = 0; i < $(this).next().children('.__select__label').length; i++) {
            $(this).next().children('.__select__label').eq(i).on('click', (evt) => {
                $(this).children().val(evt.target.textContent)
                $(this).parent().attr('data-state', '');
            });
        }
    });

    $('.__select .__select__title input').on('input', function(el) {
        let temp = $(this).val()
        if (temp) {
            $(this).parent().next().children('.__select__label').each(function () {
                if ($(this).text().toLowerCase().indexOf(temp.toLowerCase()) > -1) {
                    $(this).removeClass('d-none')
                } else {
                    $(this).addClass('d-none')
                }
            })
        } else {
            $(this).parent().next().children('.__select__label').each(function () {
                $(this).removeClass('d-none')
            })
        }
    })
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

function heightBlock() {
    for (let i=0; i < $('.articles .articlesBlock .photo-text').length; i++) {
        $('.articles .articlesBlock .photo-text').eq(i).children('.photoCollections').height($('.articles .articlesBlock .textBlockMain .textBlock').height() + 23)
    }
    for (let i=0; i < $('.newsSection .newsSectionBlock .info-block .item').length; i++) {
        setTimeout(blockImgHeight, 1)
        function blockImgHeight() {
            let blockImgHeight = $('.newsSection .newsSectionBlock .info-block .item').eq(i).children('.imgNews').height()
            $('.newsSection .newsSectionBlock .info-block .item').eq(i).children('.imgNews').css('max-height', blockImgHeight + 'px')
            blockImgHeight = blockImgHeight - $('.lineTitleSection .info-block .item').eq(i).children('.titleTextBlockNews').children('.textBlock').height() - $('.newsSection .newsSectionBlock .info-block .item .titleTextBlockNews .textAndBtn .arrows-block').height() - 50
            $('.newsSection .newsSectionBlock .info-block .item').eq(i).children('.titleTextBlockNews').children('.textAndBtn').children('.textMainCooperation').css('max-height', blockImgHeight + 'px')
        }
    }
}

$('.modal#coupon .modal-body .btnTab span').on('click', function() {
    let id = $(this).attr('data-coupon'),
        content = $(`.modal#coupon .modal-body .info-block .item[data-coupon='${id}']`)
    $('.modal#coupon .modal-body .btnTab span.active').removeClass('active')
    $(`.modal#coupon .modal-body .info-block .item.active`).removeClass('active')
    $(this).addClass('active')
    content.addClass('active')
})

// mask for phone input
window.addEventListener("DOMContentLoaded", function() {
    [].forEach.call( document.querySelectorAll('#phone'), function(input) {
    var keyCode;
    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        var matrix = "+7 (___) ___ ____",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function(a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
        }
        var reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function(a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
        if (event.type == "blur" && this.value.length < 5)  this.value = ""
    }
    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, true);
    input.addEventListener("keydown", mask, false)
  });
});

// mask for date input
window.addEventListener("DOMContentLoaded", function() {
    [].forEach.call( document.querySelectorAll('#date'), function(input) {
    var keyCode;
    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        if (pos < 0) event.preventDefault();
        var matrix = "__.__.____",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function(a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 10 && (i = 10);
            new_value = new_value.slice(0, i)
        }
        var reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function(a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 0 || keyCode > 47 && keyCode < 58) this.value = new_value;
        if (event.type == "blur" && this.value.length < 10)  this.value = ""
    }
    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, true);
    input.addEventListener("keydown", mask, false)
  });
});

$(document).ready(function(){
    $('#name').click(function() {
        var name = $(this);
        name.blur(function(){
            if(name.val() == ''){
                name.addClass('error')
            }else{
                name.removeClass('error');
            }
            checkInput()
        });
    })
    $('#phone').click(function() {
        var phone = $(this);
        phone.blur(function(){
            if(phone.val() == '' || phone.val().length < 17){
                phone.addClass('error')
            }else{
                phone.removeClass('error');
            }
            checkInput()
        });
    })
    $('#email').click(function() {
        var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i;
        var mail = $(this);
        mail.blur(function(){
            if(mail.val() != ''){
                if(mail.val().search(pattern) == 0){
                    mail.removeClass('error')
                }else{
                    mail.addClass('error')
                }
            }else{
                mail.addClass('error');
            }
            checkInput()
        });
    })
    $('#cityInput').click(function() {
        var city = $(this);
        city.blur(function(){
            if(city.val() == ''){
                city.addClass('error')
            }else{
                city.removeClass('error');
            }
            checkInput()
        });
    })
    $('#cityInput').parent().next().children('.__select__label').on('click', function(el) {
        
        $(el.target).parent().parent().children('.__select__title').children('input').removeClass('error');
        
        setTimeout(function() {
            checkInput()
        }, 1)
    })

    $('.modal#leaveRequest .btnBlock button').on('click', function(el) {
        el.preventDefault()
        console.log(checkInput())
        if (checkInput()) {
            $('.modal#leaveRequest').modal('hide')
            $('#successModal').modal('show')
        } else {
            console.log('error')
        }
        
    })

    function checkInput() {
        if ($('.modal#leaveRequest #name').val()!=''
        && $('.modal#leaveRequest #phone').val()!=''
        && $('.modal#leaveRequest #phone').val().length == 17
        && $('.modal#leaveRequest #email').val()!=''
        && $('.modal#leaveRequest #cityInput').val()!='') {
            $('.modal#leaveRequest .btnBlock button').prop('disabled', false)
            return true
        } else {
            $('.modal#leaveRequest .btnBlock button').prop('disabled', true)
            return false
        }
    }

});