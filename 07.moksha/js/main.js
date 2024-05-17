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
    let scrollThreshold;
    
    if (window.innerWidth < 768) {
        // 모바일 디바이스 기준
        scrollThreshold = 5000; // 모바일에 맞춘 값으로 설정
    } else {
        // 데스크탑 디바이스 기준
        scrollThreshold = 7310;
    }

    if (window.scrollY > scrollThreshold) {
        document.body.style.backgroundColor = '#302833';
        document.getElementById('header').style.filter = 'invert(100%)';
        document.getElementById('footer').style.filter = 'invert(100%)';
    } else {
        document.body.style.backgroundColor = '';
        document.getElementById('header').style.filter = 'none';
        document.getElementById('footer').style.filter = 'none';
    }
});
