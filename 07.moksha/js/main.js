// 스와이퍼
var swiper = new Swiper(".swiper-fade", {
    effect: "fade",
    loop: true,
    speed: 1700,
    autoplay: {
        delay: 5000,
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  window.addEventListener('scroll', function() {
    let scrollThreshold = window.innerWidth < 768 ? 5000 : 7310;

    if (window.scrollY > scrollThreshold) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});