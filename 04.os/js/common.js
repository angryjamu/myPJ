var swiper = new Swiper(".mySwiper", {
    loop:true,
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
  });

  var swiper2 = new Swiper(".prd_list_slide", {
    loop:true,
    slidesPerView: 5,
    spaceBetween: 5,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
