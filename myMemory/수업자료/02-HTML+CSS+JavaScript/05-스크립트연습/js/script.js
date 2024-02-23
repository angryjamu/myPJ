// test109 js-
var mainSwiper = new Swiper(".mainSlide", {
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
// test109 js---

// test109 j-query-
$(function () {
    $('.swiper-pagination').append('<a href="#" class="playBtn"></a>')

    let playBtn = $('.mainVisArea .mainSlide .swiper-pagination .playBtn')

    playBtn.click(function () {
        console.log('playBtn!!!')
        
        if ($(this).hasClass('on')) {
            $(this).removeClass('on')
            mainSwiper.autoplay.start()
    
        } else {
            $(this).addClass('on')
            mainSwiper.autoplay.stop()
        }
    })


})
// test109 j-query---