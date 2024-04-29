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
    // 스크롤한 높이가 300px를 초과하면 배경색 변경
    if (window.scrollY > 7310) {
        // 배경색 변경
        document.body.style.backgroundColor = '#302833';
        // #header와 #footer에 filter 속성 적용
        document.getElementById('header').style.filter = 'invert(100%)';
        document.getElementById('footer').style.filter = 'invert(100%)';
    } else {
        // 스크롤이 300px 미만인 경우 배경색을 초기값으로 변경
        document.body.style.backgroundColor = '';
        // #header와 #footer의 filter 속성 초기화
        document.getElementById('header').style.filter = 'none';
        document.getElementById('footer').style.filter = 'none';
    }
});
