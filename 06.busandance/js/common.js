$(function(){
    var swiper = new Swiper(".judge_swiper", {
        loop:true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
          },
      });
})